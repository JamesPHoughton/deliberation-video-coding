import { Video } from "./components/Video";
//import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { EnterCodes } from "./components/EnterCodes";
import { ControlBar } from "./components/ControlBar";
import { Scheme } from "./components/Scheme";
//import scheme from "./components/scheme.json"
export function Coding() {
    //const player = usePlayer();
    const codes = []; //TODO make state

    const urls = [
        {
            video: "https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-video-1675354390750", 
            audio: "https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-audio-1675354390747", 
            audioOn: true, 
            id: 1
        }
    ]
    
    const scheme = [
        {
            category: "Behavior",
            name: "Smile",
            description: "The participant displays a closed or open mouth smile",
            id: "1"
        },
        {
            category: "Behavior",
            name: "Laugh",
            description: "The participant laughs.",
            id: "2"
        },
        {
            category: "Behavior",
            name: "Eye contact",
            description: "The participant appears to be looking directly at the camera.",
            id: "3"
        },
        {
            category: "Emotion",
            name: "Happy",
            description: "The participant says or does something to indicate they are happy",
            id: "4"
        },
        {
            category: "Emotion",
            name: "Sad",
            description: "The participant says or does something to indiciate they are sad",
            id: "5"
        },
        {
            category: "Emotion",
            name: "Angry",
            description: "The participant says or does something to indicate they are angry",
            id: "6"
        },
        {
            category: "Emotion",
            name: "Confused",
            description: "The participant says or does something to indicate they are confused.",
            id: "7"
        }
    ]
    
    
    const vidElements = []
    for (let i = 0; i < urls.length; i++) {
        const elt = urls[i];
        console.log("elt.video" + elt.video)
        vidElements.push(
            <Video 
                vidURL={elt.video}
                audioURL={elt.audio || ""}
                id={elt.id}
                audioOn={elt.audioOn}
            />
        )
    }
    const videos = document.getElementsByTagName("video");
    const audios = document.getElementsByTagName("audio");
    
    function startVideos() {
        console.log("starting videos and audios")
        for (let i = 0; i < videos.length; i++) {
            videos[i].play();
            if (i < audios.length) {
                audios[i].play()
            }
        }
    }

    function pauseVideos() {
        console.log("pausing videos and audios")
        for (let i = 0; i < videos.length; i++) {
            videos[i].pause();
            if (i < audios.length) {
                audios[i].pause()
            }
        }
        
    }

    function back10() {
        console.log("rewind")
        for (let i = 0; i < videos.length; i++) {
            videos[i].currentTime = videos[i].currentTime - 10
            if (i < audios.length) {
                audios[i].currentTime = audios[i].currentTime - 10
            }
        }
    }

    function forward10() {
        console.log("fast forward")
        for (let i = 0; i < videos.length; i++) {
            videos[i].currentTime = videos[i].currentTime + 10
            if (i < audios.length) {
                audios[i].currentTime = audios[i].currentTime + 10
            }
        }
    }

    function handleEntry() {
        pauseVideos()
    }

    function handleSubmit(selectedList, setSelectedList) {
        const time = videos[0].currentTime
        console.log("time " + videos[0].currentTime)
        //document.getElementById("input-box")
        codes.push({
            time: time,
            code: selectedList
        })
        setSelectedList([]);
        startVideos()
    }
    
    window.addEventListener("keydown", (e) => {
        if (e.defaultPrevented) {
            return;
        }
        let handled = false;
        if (e.key === " ") {
            videos[0].paused ? startVideos() : pauseVideos();
            handled = true;
        }
        if (e.key === "ArrowLeft") {
            back10();
        }
        if (e.key === "ArrowRight") {
            forward10();
        }

        if (handled) {
            e.preventDefault();
        }
    }, false)
    

    return(
        <div className="coding">
            <div style={{display: "flex", justifyContent: 'space-between'}}>
                <div id="video" style={{margin: "30px"}}>
                    <div>
                        {vidElements}
                    </div>
                    <ControlBar play={startVideos} pause={pauseVideos} back={back10} forward={forward10} />
                </div>
                <Scheme scheme={scheme} />
            </div>
            <div style={{margin: "30px"}}>
                <EnterCodes handleSubmit={handleSubmit} scheme={scheme} handleEntry={handleEntry}/>
            </div>
            
            
        </div>
    )
}