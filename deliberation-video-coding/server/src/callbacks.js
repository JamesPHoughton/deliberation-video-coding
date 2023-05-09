import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();
//import { getPresignedUrl } from "./awsInterface";
console.log("loaded");
// console.log("did  we import? ", getPresignedUrl);

const scheme1 = [
  {
    category: "Facial Expression",
    name: "Smile",
    description: "The participant displays a closed or open mouth smile",
    id: "1",
  },
  {
    category: "Facial Expression",
    name: "Warm",
    description: "The participant's facial expression appears to display warmth.",
    id: "2",
  },
  {
    category: "Verbal",
    name: "Use of reflections",
    description:
      "The participant spoke about their own experiences",
    id: "3",
  },
  {
    category: "Verbal",
    name: "Summaries of content",
    description:
      "The participant summarized the conversation",
    id: "4",
  },
  {
    category: "Verbal",
    name: "Open-ended questions",
    description:
      "The participant asked an open-ended question.",
    id: "5",
  },
  {
    category: "Verbal",
    name: "Empathy",
    description:
      "The participant displayed empathy towards another participant",
    id: "6",
  },
  {
    category: "Emotion",
    name: "Confused",
    description:
      "The participant says or does something to indicate they are confused.",
    id: "7",
  },
];

const survey = [
  {
    question: "How often was the participant distracted?",
    responses: [{value: 2, text: "often"}, {value: 1, text: "on occasion"}, {value: 0, text: "never"}]
  },
  {
    question: "How often were there verbal disruptions?",
    responses: [{value: 2, text: "often"}, {value: 1, text: "on occasion"}, {value: 0, text: "never"}]
  },
  {
    question: "Overall, was the content relevant to the issue?",
    responses: [{value: 1, text: "Yes, it was relevant"}, {value: 0, text: "No, it was not relevant"}]
  },
  {
    question: "Overall, was there tension in the discussion?",
    responses: [{value: 1, text: "Yes, there was clear tension"}, {value: 0, text: "It's unclear if there was tension"}, {value: -1, text: "No, there was clear alignment."}]
  }
]

//paths are in the format recordingRoomName/recordingIds //TODO remove first part and just have path
videoPaths1 = [
  {
    video:
      "https://wattslab-video-test-public.s3.amazonaws.com/01GQMRKWM5B6FFN94XE7KDNKYZ-internal/1674660535410-ae4d075b-39b6-48ec-a7c0-868d6fd06afe-cam-video-1674660544002",
    audio:
      "https://wattslab-video-test-public.s3.amazonaws.com/01GQMRKWM5B6FFN94XE7KDNKYZ-internal/1674660535410-ae4d075b-39b6-48ec-a7c0-868d6fd06afe-cam-audio-1674660543681",
    audioOn: true,
    id: 1,
  },
]

jamesVideoPaths = [
  {
    video:
      "https://wattslab-video-test-public.s3.amazonaws.com/01GT9PSKZTWTR87MGDW1JQTG0K-internal-james-netta/1677511696683-fc210681-bd73-4bfc-ac8d-1c5c606a9bd0-cam-video-1677511697670",
    audio:
      "https://wattslab-video-test-public.s3.amazonaws.com/01GT9PSKZTWTR87MGDW1JQTG0K-internal-james-netta/1677511696683-fc210681-bd73-4bfc-ac8d-1c5c606a9bd0-cam-audio-1677511697662",
    audioOn: true,
    id: 1,
  }
]

videoPaths2 = [
  {
    videoPath:
      "deliberation/01GW069A2ZDST03H993W32KVN4/1679339780397-53245341-afe7-4016-b962-f2beb6da67b4-cam-video-1679339781358",
    audioPath:
      "deliberation/01GW069A2ZDST03H993W32KVN4/1679339780397-53245341-afe7-4016-b962-f2beb6da67b4-cam-audio-1679339781361",
    audioOn: true,
    id: 1,
  },
];

Empirica.onGameStart(({ game }) => {
  console.log("onGameStart Callback Started");
  // one video or combo of videos per round
  // each stage can be a different pass through the video
  // e.g.:
  // - stage 1: "Survey" watch and give general overview with a post-survey
  // - stage 2: "Annotate" live annotation

  const round = game.addRound({ name: "Test Video 1", videoList: jamesVideoPaths });
  round.addStage({name: "Survey", duration: 3000, survey: survey})
  round.addStage({ name: "Annotate", duration: 3000, scheme: scheme1 });

  // for (videoSet of videoPaths2) {
  //   console.log("adding videoSet", videoSet);
  //   // const videoURL = getPresignedUrl({
  //   //   // maybe move to onBatchStart
  //   //   region: process.env.AWS_REGION,
  //   //   bucket: process.env.AWS_BUCKET,
  //   //   S3Path: videoSet(videoSet["videoPath"]),
  //   // });
  //   console.log("Video URL", videoURL);
  //   const audioURL = getPresignedUrl({
  //     region: process.env.AWS_REGION,
  //     bucket: process.env.AWS_BUCKET,
  //     S3Path: videoSet(videoSet["audioPath"]),
  //   });
  //   const round = game.addRound({
  //     name: "Test Video 1",
  //     videoList: { ...videoSet, videoURL, audioURL },
  //   });
  //   //round.addStage({ name: "Survey", duration: 120 });
  //   round.addStage({ name: "Annotate", duration: 3000, scheme: scheme1 });
  // }
});

Empirica.onRoundStart(({ round }) => {});

Empirica.onStageStart(({ stage }) => {});

Empirica.onStageEnded(({ stage }) => {});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});

Empirica.on("playerStage", "codes", (ctx, { player, codes }) => {
  console.log("player stage callback")
  console.log("player ", player);
  console.log("codes ", codes);
})