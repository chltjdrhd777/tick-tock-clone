import React, { useState } from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSideBar() {
  const [click, setClick] = useState();
  return (
    <SideVarDiv>
      <IconContainer>
        <FavoriteBorderIcon />
        <p>1000</p>
      </IconContainer>
      <IconContainer>
        <MessageIcon />
        <p>1000</p>
      </IconContainer>
      <IconContainer>
        <ShareIcon />
        <p>1000</p>
      </IconContainer>
    </SideVarDiv>
  );
}

const SideVarDiv = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  color: white;
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  font-size: 25px;
  & svg {
    font-size: 40px;
  }
`;

export default VideoSideBar;
