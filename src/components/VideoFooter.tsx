import React from "react";
import styled from "styled-components";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

interface VideoFooterProps {
  channel?: string;
  description?: string;
  song?: string;
}

function VideoFooter({ channel, description, song }: VideoFooterProps) {
  return (
    <FooterContainer>
      <FooterTextDiv>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <TickerDiv>
          <MusicNoteIcon />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </TickerDiv>
      </FooterTextDiv>

      <CdImage src="https://static.thenounproject.com/png/934821-200.png" />
    </FooterContainer>
  );
}

const CdImage = styled.img``;
const FooterTextDiv = styled.div`
  height: 10px;
  & p {
    margin-bottom: 15px;
  }
`;

const FooterContainer = styled.div`
  position: relative;
  color: white;
  bottom: 150px;
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
    position: absolute;
    bottom: 0;
    right: 20px;
  }

  ${FooterTextDiv} {
    flex: 1;
  }
`;

const TickerDiv = styled.div`
  & p {
    padding-top: 7px;
    font-size: 20px;
  }

  & svg {
    position: absolute;
  }

  & .ticker {
    margin-left: 30px;
    bottom: 10px;
  }
`;

export default VideoFooter;
