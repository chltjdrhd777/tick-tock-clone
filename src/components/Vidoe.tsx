import React, { useState, useRef } from "react";
import styled from "styled-components";
import VideoSideBar from "./VideoSideBar";
import VideoFooter from "./VideoFooter";

function Vidoe() {
  // == getElementById
  // useRef should be a null because the initial state before DOM is rendered refers to nothing at this juncture

  //? I tried to use redux to deal with this separate Vidoe component. but it is worse I waste 3hours to attempt to use redux
  //? so, Note
  //? if there isn't an entire data set to use,
  //? just use useState

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log(playing);
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
      <VideoPlayer
        loop
        ref={videoRef}
        onClick={videoPress}
        src="https://v16m.tiktokcdn.com/fcff165b739fb6b450b2fcbc3026adfd/5f3891bc/video/tos/alisg/tos-alisg-pv-0037/96e4a7a6c4f349f587e731144d89bbb1/?a=1180&br=5728&bt=2864&cr=0&cs=0&dr=3&ds=3&er=&l=202008140154030101152280781F29AB6B&lr=tiktok&mime_type=video_mp4&qs=13&rc=am47cmRseXI4djMzNzgzM0ApOjNtbWQ8M29xZTMzPDU6eWc0LWdnXjYtaWtfLS02LzRzc2RoNWxeZnNsMnAtLTEyLS06Yw%3D%3D&vl=&vr="
      />

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
