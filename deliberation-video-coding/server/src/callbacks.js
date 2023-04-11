import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();
import { getPresignedUrl } from "./awsInterface";
console.log("loaded");
// console.log("did  we import? ", getPresignedUrl);

const scheme1 = [
  {
    category: "Behavior",
    name: "Smile",
    description: "The participant displays a closed or open mouth smile",
    id: "1",
  },
  {
    category: "Behavior",
    name: "Laugh",
    description: "The participant laughs.",
    id: "2",
  },
  {
    category: "Behavior",
    name: "Eye contact",
    description:
      "The participant appears to be looking directly at the camera.",
    id: "3",
  },
  {
    category: "Emotion",
    name: "Happy",
    description:
      "The participant says or does something to indicate they are happy",
    id: "4",
  },
  {
    category: "Emotion",
    name: "Sad",
    description:
      "The participant says or does something to indiciate they are sad",
    id: "5",
  },
  {
    category: "Emotion",
    name: "Angry",
    description:
      "The participant says or does something to indicate they are angry",
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

//paths are in the format recordingRoomName/recordingIds
// videoPaths1 = [
//   {
//     video:
//       "01GR9ED3G57XJBBA77068BNH90/1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-video-1675354390750",
//     audio:
//       "01GR9ED3G57XJBBA77068BNH90/1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-audio-1675354390747",
//     audioOn: true,
//     id: 1,
//   },
// ]

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

  const round = game.addRound({ name: "test" });
  round.addStage({ name: "teststage", duration: 10000 });

  // for (videoSet of videoPaths2) {
  //   console.log("adding videoSet", videoSet);
  //   const videoURL = getPresignedUrl({
  //     // maybe move to onBatchStart
  //     region: process.env.AWS_REGION,
  //     bucket: process.env.AWS_BUCKET,
  //     S3Path: videoSet(videoSet["videoPath"]),
  //   });
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
