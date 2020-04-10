import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from 'themming/globalStyle';
import Normalize from 'themming/normalize';

addDecorator(storyFn => {
  return (
    <Normalize>
      <GlobalStyle />
      {storyFn()}
    </Normalize>
  );
});
