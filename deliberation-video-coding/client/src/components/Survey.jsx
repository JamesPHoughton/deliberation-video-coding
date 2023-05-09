import React from "react";
import { useStage, usePlayer } from "@empirica/core/player/classic/react";
import { useEffect } from "react";
export function Survey ({urls}) {
    const stage = useStage();
    const survey = stage.get("survey");
    const player = usePlayer();

    useEffect(() => {
        player.stage.set("participantID", player.get("participantIdentifier"))
        player.stage.set("vidURLs", urls)
        player.stage.set("name", "Survey")
    }, [])

    const surveyElts = []
    for (let i = 0; i < survey.length; i++) {
        const responses = survey[i].responses;
        const radios = [];
        for (let j = 0; j < responses.length; j++) {
            radios.push(
                <div>
                    <input type="radio" style={{marginLeft: "20px"}} value={responses[j].value} name={survey[i].question}/> 
                    {responses[j].text}
                </div>
            )   
        }
        surveyElts.push(
            <div>
                <p className="text-lg">{survey[i].question}</p>
                <div>
                    {radios}
                </div>
                <br/>
            </div>
        )
    }
    return (
        <div>
            {surveyElts}
        </div>
    )
}