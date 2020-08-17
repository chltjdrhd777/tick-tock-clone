import React, { useState, useRef } from "react";
import styled from "styled-components";
import VideoSideBar from "./VideoSideBar";
import VideoFooter from "./VideoFooter";

interface VideoProps {
  url?: string;
}

function Vidoe(props: VideoProps) {
  // == getElementById
  // useRef should be a null because the initial state before DOM is rendered refers to nothing at this juncture

  //? I tried to use redux to deal with this separate Vidoe component. but it is worse I waste 3hours to attempt to use redux
  //? so, Note
  //? if there isn't an entire data set to use,
  //? just use useState

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoPress = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current!.pause();
    } else {
      setPlaying(true);
      videoRef.current!.play();
    }
  };

  return (
    <VideoContainerDiv>
      <VideoPlayer loop ref={videoRef} onClick={videoPress} src={props.url} />

      <VideoSideBar />
      <VideoFooter
        channel={"Anderson"}
        description={"go higher and she is beautiful"}
        song={"I don't know"}
      />
    </VideoContainerDiv>
  );
}

const VideoContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  margin-bottom: 25px;
`;

const VideoPlayer = styled.video`
  object-fit: fill;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export default Vidoe;
