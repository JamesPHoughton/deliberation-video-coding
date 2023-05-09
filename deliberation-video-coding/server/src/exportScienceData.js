import * as fs from "fs";

const scienceDataDir = "/data/scienceData";

export function exportScienceData({ playerStage }) {
  try {
    const participantIdentifier = playerStage?.get("participantID");
    const stageName = playerStage?.get("name");
    const outFileName = `${scienceDataDir}/participant_${participantIdentifier}_stage${stageName}.jsonl`;
    console.log("playerStage")
    console.log(playerStage);

    // // // some intro surveys might go into the player record for future use?
    // const surveys = filterByKey(player, (key) => key.startsWith("survey_"));
    // const prompts = filterByKey(player, (key) => key.startsWith("prompt_"));
    // const qualtrics = filterByKey(player, (key) =>
    //   key.startsWith("qualtrics_")
    // );

    /* 
    To add:
    - ready time (at countdown)
    - join experiment time
    - dispatches participated in
    - audio mute history
    - video mute history
    - recruitment information (what service, what qualifications, size, timing, etc.)
    - stage timings
    */
    let playerData = {};
    if (stageName === "Annotate") {
        playerData = {
            MTurkID: participantIdentifier,
            videoURLs: playerStage.get("vidURLs"),
            codes: playerStage?.get("codes")
        };
    } else if (stageName === "Survey") {
        playerData = {
            MTurkID: participantIdentifier,
            videoURLs: playerStage.get("vidURLs"),
            surveyResponses: playerStage?.get("surveyResponses")
        };
    }
    

    if (!fs.existsSync(scienceDataDir)) {
        fs.mkdirSync(scienceDataDir, {recursive: true});
    }
  
    fs.writeFile(outFileName, `${JSON.stringify(playerData)}\n`, (err) => {
    if (err) {
        console.log(
        `Failed to write science data for player ${player.id} to ${outFileName}`
        );
        console.log(err);
    } else {
        console.log(
        `Writing payment data for player ${participantIdentifier} to ${outFileName}`
        );
        console.log(
            `${JSON.stringify(playerData)}\n`
        )
    }
    });
  } catch (err) {
    console.log("Uncaught exception while exporting scienceData:", err);
  }
}