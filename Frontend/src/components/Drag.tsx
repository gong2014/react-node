import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
`;

const Box = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
  color: white;
  transform: translate();
  color: white;
`;

const Drag = () => {
  return (
    <Page>
      <Box>Box</Box>
    </Page>
  );
};

export default Drag;
