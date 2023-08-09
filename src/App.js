import { useState } from "react";
import "./App.css";
import useApi from "./hooks/useApi";
import useAudio from "./hooks/useAudio.jsx";



function App() {
  const [transcript, setTranscript] = useState("waiting for transcript...")
  const [audio, setAudio] = useState()
  const {startRecording, stopRecording} = useAudio();
  const sendAudio = useApi()
  return (
    <div className="App">
      <h1>test demo MDbee</h1>
      <button style={{display: "block" }} onClick={startRecording}>record</button>
      <button style={{display: "block" }} onClick={setAudio(stopRecording)}>stop recording </button>
      <button style={{display: "block" }} onClick={setTranscript(sendAudio)}>transcribe</button>
      <h4>{transcript}</h4>
    </div>
  );
}

export default App;
