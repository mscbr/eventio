import React from 'react';
import styled from 'styled-components';

import TagComponent from './index';

export default { title: 'Atoms/Tag' };

const StyledWrapper = styled.div`
  margin: 20px;
  display: 'flex';
`;

export const Tag = () => {
  return (
    <StyledWrapper>
      <TagComponent>John Kowalski</TagComponent>
      <TagComponent>Jan Novotny</TagComponent>
      <TagComponent outline>Me</TagComponent>
    </StyledWrapper>
  );
};
