import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// import { AppState } from 'store';
// import { logout } from 'store/auth/actions';
import logo from 'assets/layout/logo.png';
import Avatar from 'components/avatar';
import UserLabel from 'components/dropdown/parts/userLabel';
import UserItems from 'components/dropdown/parts/userItems';
import Dropdown from 'components/dropdown/index';

const StyledEventsList = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledHead = styled.div`
  display: flex;
  width: 100%;
`;

const EventsList = () => {
  // const { user } = useSelector((state: AppState) => state.userReducer);
  // const dispatch = useDispatch();
  // console.log('EventsList', user);
  return (
    <StyledEventsList>
      <StyledHead>
        <img src={logo} alt="logo" />;
        <Dropdown
          label={<UserLabel>Maciej Scbr</UserLabel>}
          adornment={<Avatar firstName="Maciej" lastName="Scbr" />}
          items={<UserItems />}
        />
      </StyledHead>
    </StyledEventsList>
  );
};

export default EventsList;
