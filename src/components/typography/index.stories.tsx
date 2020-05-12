import React from 'react';
import styled from 'styled-components';

import Detail from './detail';
import Title from './title';
import Subtitle from './subtitle';
import Description from './description';

const Line = styled.div`
  margin: 20px;
`;

export default { title: 'Layout/Typography' };

export const Titles = () => {
  return (
    <>
      <Line>
        <Detail>Detail</Detail>
      </Line>
      <Line>
        <Title>Title</Title>
      </Line>
      <Line>
        <Subtitle>Subtitle</Subtitle>
      </Line>
      <Line>
        <Description>Description</Description>
      </Line>
    </>
  );
};
