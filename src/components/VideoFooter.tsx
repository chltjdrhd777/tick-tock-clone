import React from "react";
import styled from "styled-components";

function VideoFooter() {
  return (
    <FooterContainer>
      <FooterTextDiv>
        <h3>@Anderson</h3>
        <p>description</p>
      </FooterTextDiv>
      <CdImage src="https://static.thenounproject.com/png/934821-200.png" />
    </FooterContainer>
  );
}

const CdImage = styled.img``;
const FooterTextDiv = styled.div``;

const FooterContainer = styled.div`
  position: relative;
  color: white;
  bottom: 90px;
  padding: 20px;
  display: flex;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${CdImage} {
    animation: spin infinite 5s linear;
    height: 50px;
    /* filter:invert(1) => change svg color to white  */
    filter: invert(1);
  }

  ${FooterTextDiv} {
    flex: 1;
  }
`;

export default VideoFooter;
