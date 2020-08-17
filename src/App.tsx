import React, { useState, useEffect } from "react";
import Vidoe from "./components/Vidoe";
import styled from "styled-components";
import database from "./firebaseData";

function App() {
  const [videos, setVideos] = useState([] as any[]);

  useEffect(() => {
    database.collection("videos").onSnapshot((ev) => console.log(ev.docs));
  }, []);

  console.log(videos);

  return (
    <AppContainer>
      <AppVideosDiv>
        {videos.map(({ url }) => (
          <Vidoe url={url} />
        ))}
        <Vidoe
          url={
            "https://v16m.tiktokcdn.com/119e1c153325419c551d3c12c72f457b/5f3bcf42/video/tos/alisg/tos-alisg-pv-0037/96e4a7a6c4f349f587e731144d89bbb1/?a=1180&br=5728&bt=2864&cr=0&cs=0&dr=3&ds=3&er=&l=2020081612532101011515315303A04D3C&lr=tiktok&mime_type=video_mp4&qs=13&rc=am47cmRseXI4djMzNzgzM0ApOjNtbWQ8M29xZTMzPDU6eWc0LWdnXjYtaWtfLS02LzRzc2RoNWxeZnNsMnAtLTEyLS06Yw%3D%3D&vl=&vr="
          }
        />
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
