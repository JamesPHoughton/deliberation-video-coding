import React from "react";
import { useStage } from "@empirica/core/player/classic/react";
import Likert from "react-likert-scale"
export function Survey ({}) {
    const stage = useStage();
    const survey = stage.get("survey");
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