import { Deepgram } from "@deepgram/sdk";
import { readFileSync } from "fs";

// The API key we created in step 3
const deepgramApiKey = "fc8f0cc8faad9d0b41fcc85451fbeac476f7136e";

// Replace with your file path and audio mimetype
const pathToFile = "SOME_FILE.wav";
const mimetype = "audio/wav";

// Initializes the Deepgram SDK
const deepgram = new Deepgram(deepgramApiKey);

console.log("Requesting transcript...");
console.log("Your file may take up to a couple minutes to process.");
console.log(
  "While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s."
);
console.log(
  "To learn more about customizing your transcripts check out developers.deepgram.com."
);

deepgram.transcription
  .preRecorded(
    { buffer: readFileSync(pathToFile), mimetype },
    { smart_format: true, model: "nova", language: "en-US" }
  )
  .then((transcription) => {
    console.dir(transcription, { depth: null });
  })
  .catch((err) => {
    console.log(err);
  });
