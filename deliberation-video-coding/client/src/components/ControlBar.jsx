import { Button } from "./Button"
import {Play, Pause, ClockClockwise, ClockCounterClockwise} from "@phosphor-icons/react"
import React from "react";

export function ControlBar({play, pause, back, forward}) {
    return(
        <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
            <Button handleClick={play} children={<Play/>}/>
            <Button handleClick={pause} children={<Pause/>}/>
            <Button handleClick={back} children={<ClockCounterClockwise/>}/>
            <Button handleClick={forward} children={<ClockClockwise/>}/>
        </div>
    )
}