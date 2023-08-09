import { useState, useRef } from "react";
function useAudio() {
  const [recorder, setRecorder] = useState(null);
  const [stream, setStream] = useState(null);
  const [blob, setBlob] = useState();
  const [blobURL, setBlobURL] = useState(null);
  const videoRef = useRef();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setStream(stream);
      const mediaRecorder = new MediaRecorder(stream);
      setRecorder(mediaRecorder);

      mediaRecorder.onstart();
      const chunks = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      mediaRecorder.onstop = () => {
        if (videoRef.current) videoRef.current.pause();

        const blob = new Blob(chunks, { type: "mp3" });
        setBlob(blob);
        const blobURL = URL.createObjectURL(blob);
        setBlobURL(blobURL);
        console.log(blob);
        console.log(blobURL);
      };
    } catch (error) {
      console.error("cant get access");
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      recorder.stream.getTracks().map((track) => track.stop());
      setRecorder(null);
      setStream(null);
      return blob, blobURL;
    }
  };

  return { startRecording, stopRecording };
}
export default useAudio;
