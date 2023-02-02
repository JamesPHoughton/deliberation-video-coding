import { useState, useRef } from "react";
import "./App.css";

function App() {
  const videoElement1 = useRef(null);
  const videoElement2 = useRef(null);
  const videoElement3 = useRef(null);
  const videoElement4 = useRef(null);
  const videoElement5 = useRef(null);
  const videoElement6 = useRef(null);

  const seekTo = (time) => {
    console.log(`seeking to ${time}`);
    videoElement1.current.currentTime = time;
    videoElement2.current.currentTime = time;
    videoElement3.current.currentTime = time;
    videoElement4.current.currentTime = time;
    videoElement5.current.currentTime = time;
    videoElement6.current.currentTime = time;
  };

  const startVideos = () => {
    console.log(`starting videos`);
    videoElement1.current.play();
    videoElement2.current.play();
    videoElement3.current.play();
    videoElement4.current.play();
    videoElement5.current.play();
    videoElement6.current.play();
  };

  return (
    <div className="App">
      <div>
        <video
          id="myVideo1"
          preload="auto"
          ref={videoElement1}
          width="250"
          controls
        >
          <source
            src="https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-audio-1675354390747"
            type="video/webm"
          />
        </video>
        <video
          id="myVideo2"
          preload="auto"
          ref={videoElement2}
          width="250"
          controls
        >
          <source
            src="https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-video-1675354390750"
            type="video/webm"
          />
        </video>
        <video
          id="myVideo3"
          preload="auto"
          ref={videoElement3}
          width="250"
          controls
        >
          <source
            src="https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-47a59e44-d826-490a-bbb8-466ee00c3694-cam-audio-1675354385943"
            type="video/webm"
          />
        </video>
        <video
          id="myVideo4"
          preload="auto"
          ref={videoElement4}
          width="250"
          controls
        >
          <source
            src="https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-47a59e44-d826-490a-bbb8-466ee00c3694-cam-video-1675354385946"
            type="video/webm"
          />
        </video>
        <video
          id="myVideo5"
          preload="auto"
          ref={videoElement5}
          width="250"
          controls
        >
          <source
            src="https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-b0676062-72d5-406d-ab6f-e0c84aaa477e-cam-audio-1675354389677"
            type="video/webm"
          />
        </video>
        <video
          id="myVideo6"
          preload="auto"
          ref={videoElement6}
          width="250"
          controls
        >
          <source
            src="https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-b0676062-72d5-406d-ab6f-e0c84aaa477e-cam-video-1675354389679"
            type="video/webm"
          />
        </video>
      </div>
      <div className="card">
        <button onClick={() => startVideos()}>Start</button>
      </div>
      <h1>Enter time to seek to</h1>
      <div className="card">
        <button onClick={() => seekTo(0)}>0 seconds</button>
        <button onClick={() => seekTo(10)}>10 seconds</button>
        <button onClick={() => seekTo(31.3)}>31.3 seconds</button>
      </div>
    </div>
  );
}

export default App;
