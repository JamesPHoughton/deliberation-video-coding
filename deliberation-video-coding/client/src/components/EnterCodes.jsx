import { PlayCircle } from "@phosphor-icons/react";
import Multiselect from "multiselect-react-dropdown"
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { usePlayer } from "@empirica/core/player/classic/react";
export function EnterCodes({handleSubmit, scheme, handleEntry, urls}) {
    const [selected, setSelected] = useState([]);
    const player = usePlayer();
    function handleSelect(selectedList) {
        setSelected(selectedList)
        console.log(selectedList)
    }
    useEffect(() => {
        document.getElementById("multiselect").addEventListener('keydown', (e) => {
            if (e.key === " " || e.key === "ArrowLeft" || e.key === "ArrowRight") {
                e.stopPropagation();
            }
        }, true)
        player.stage.set("codes", []);
        player.stage.set("vidURLs", urls);
        player.stage.set("participantID", player.get("participantIdentifer"));
        player.stage.set("name", "Annotate")
    }, [])
    
    return(
        <div id="enterCode">
            <div id="multiselect" onClick={handleEntry} style={{margin: "10px"}}>
                <p>Enter codes:</p>
                <Multiselect id="input-box" selectedValues={selected} options={scheme} onSelect={handleSelect} onRemove={handleSelect} displayValue="name" groupBy="category"/>
            </div>
            <Button handleClick={() => {handleSubmit(selected, setSelected)}} children="Submit code for this timestamp"/>
        </div>
    )
}