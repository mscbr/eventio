// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { prepareActions, createReducer } from 'store/helpers';
import { store, AppState } from 'store';
import isEqual from 'lodash/isEqual';

export const create = async ({ key, method, args }: any) => {
  const initialState = {
    data: undefined,
    loading: false,
  };

  const reducerData = {
    setData: (_, { payload: { data } }: any) => ({
      ...data,
    }),
    loading: (state, { payload: { loading } }: any) => ({
      ...state,
      loading,
    }),
  };

  const reducer = createReducer(initialState, reducerData);

  store.injectReducer(key, reducer);

  const actionsData = [
    ['setData', 'data'],
    ['loading', 'loading'],
  ];

  const actions = prepareActions(actionsData, key);

  try {
    store.dispatch(actions.loading(true));
    const response = args ? await method(args) : await method();
    store.dispatch(actions.setData(response));
    store.dispatch(actions.loading(false));
  } catch {
    store.dispatch(actions.setData(null));
    store.dispatch(actions.loading(false));
  }

  return {
    actions: { ...actions },
    values: store.getState()[key],
  };
};

export const useAsyncReducer = (key, method, args?: any) => {
  const data = useSelector((state: AppState) => state[key]);
  const [ready, setReady] = useState(false);
  const [refetching, setRefetching] = useState(false);
  const argsRef = useRef({ key, method, args });

  useEffect(() => {
    if (ready && !data) setReady(false);
  }, [data, ready]);

  useEffect(() => {
    if (!ready && argsRef.current && argsRef.current.key) {
      const fetchData = async () => {
        const response = await create({ ...argsRef.current });
        if (response) {
          setReady(true);
          if (refetching) setRefetching(false);
        }
      };
      fetchData();
    }
  }, [ready, refetching]);

  useEffect(() => {
    if (args && !isEqual(argsRef.current.args, args)) {
      argsRef.current.args = args;
      setReady(false);
    }
  }, [args]);

  useEffect(() => {
    if (!isEqual(argsRef.current.key, key)) {
      argsRef.current.key = key;
      setReady(false);
    }
  }, [args, key]);

  useEffect(() => {
    return () => {
      if (key) {
        store.removeReducer(key);
      }
    };
  }, [key]);

  if (!ready) {
    return {
      loading: true,
    };
  }

  return {
    ...data,
    loading: false,
    refetch: () => {
      setReady(false);
    },
  };
};
