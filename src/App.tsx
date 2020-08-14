import React from "react";
import Vidoe from "./components/Vidoe";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <AppVideosDiv>
        <Vidoe />
        <Vidoe />
        <Vidoe />
      </AppVideosDiv>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  background-color: black;
  /*these two things are good hacks to deploy items at center */
  display: grid;
  place-items: center;
  /*///////*/
`;
const AppVideosDiv = styled.div`
  position: relative;
  height: 800px;
  overflow: scroll;
  width: 80%;
  max-width: 500px;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
