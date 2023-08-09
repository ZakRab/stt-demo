// import { useEffect } from "react";

// export default function useApi(blob, blobURL) {
//   // const speech = require("@google-cloud/speech");
//   let speech = "heeou";
//   const client = new speech.SpeechClient();
//   let transcription;
//   useEffect(() => {
//     /**
//      * Calls the Speech-to-Text API on a demo audio file.
//      */
//     async function sendAudio() {
//       // The audio file's encoding, sample rate in hertz, and BCP-47 language code
//       const audio = {
//         uri: blob,
//       };
//       const config = {
//         encoding: "LINEAR16",
//         sampleRateHertz: 16000,
//         languageCode: "en-US",
//       };
//       const request = {
//         audio: audio,
//         config: config,
//       };

//       // Detects speech in the audio file
//       const [response] = await client.recognize(request);
//       transcription = response.results
//         .map((result) => result.alternatives[0].transcript)
//         .join("\n");
//       console.log(`Transcription: ${transcription}`);
//     }

//     sendAudio();
//   }, [blob, blobURL]);

//   return transcription;
// }
