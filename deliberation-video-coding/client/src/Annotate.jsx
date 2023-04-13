import { Video } from "./components/Video";
//import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useEffect, useState } from "react";
import { EnterCodes } from "./components/EnterCodes";
import { ControlBar } from "./components/ControlBar";
import { Scheme } from "./components/Scheme";
import { useRound, useStage, usePlayer } from "@empirica/core/player/classic/react";
//import scheme from "./components/scheme.json"
import { Survey } from "./components/Survey";
import { Button } from "./components/Button"
//import Likert from "react-likert-scale"
export function Annotate() {
    //const player = usePlayer();
    const [codes, setCodes] = useState([]); //TODO where should this be stored
    const round = useRound();
    const stage = useStage();
    const player = usePlayer()
    const stageName = stage.get("name");

    const urls = round.get("videoList");
    const scheme = stage.get("scheme") || "";
    const survey = stage.get("survey") || [];
    // const urls = [
    //     {
    //         video: "https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-video-1675354390750", 
    //         audio: "https://wattslab-video-test-public.s3.amazonaws.com/01GR9ED3G57XJBBA77068BNH90/1675354384929-1e60214d-05d1-401e-9bd9-d117f5bec0f0-cam-audio-1675354390747", 
    //         audioOn: true, 
    //         id: 1
    //     }
    // ]
    // const scheme = [
    //     {
    //         category: "Behavior",
    //         name: "Smile",
    //         description: "The participant displays a closed or open mouth smile",
    //         id: "1"
    //     },
    //     {
    //         category: "Behavior",
    //         name: "Laugh",
    //         description: "The participant laughs.",
    //         id: "2"
    //     },
    //     {
    //         category: "Behavior",
    //         name: "Eye contact",
    //         description: "The participant appears to be looking directly at the camera.",
    //         id: "3"
    //     },
    //     {
    //         category: "Emotion",
    //         name: "Happy",
    //         description: "The participant says or does something to indicate they are happy",
    //         id: "4"
    //     },
    //     {
    //         category: "Emotion",
    //         name: "Sad",
    //         description: "The participant says or does something to indiciate they are sad",
    //         id: "5"
    //     },
    //     {
    //         category: "Emotion",
    //         name: "Angry",
    //         description: "The participant says or does something to indicate they are angry",
    //         id: "6"
    //     },
    //     {
    //         category: "Emotion",
    //         name: "Confused",
    //         description: "The participant says or does something to indicate they are confused.",
    //         id: "7"
    //     }
    // ]
    
    
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
    // useEffect(() => {
    //     videos[0].currentTime = 47;
    // })
    
    
    
    useEffect(() => {
        let interval = setInterval(function(){
            console.log("interval")
            for (let i = 0; i < videos.length; i++) {
                audios[i].currentTime = videos[i].currentTime;
            }
        }, 3000);
        return () => {clearInterval(interval);}
    }, [])


    
    
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
        setCodes(codes.push({
            time: time,
            code: selectedList
        }))
        console.log(codes);
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

    function submitStage() {
        if (stageName === "Annotate") {
            console.log("codes before set", codes)
            player.stage.set("liveAnnotationCodes", codes);
            console.log(player.stage.get("liveAnnotationCodes", codes)); //TODO fix this
        }
       
        player.stage.set("submit", true);
    }
    

    return (
        <div>
            {stageName === "Survey" &&
                <p className="text-xl font-bold" style={{marginBottom: "30px"}}>Please watch the following video in its entirety, and answer the questions to the right about what you observe, holistically.</p>
            }
            <div style={{display: "flex", justifyContent: 'space-between'}}>
                <div id="video" style={{margin: "30px"}}>
                    <div>
                        {vidElements}
                    </div>
                    <ControlBar play={startVideos} pause={pauseVideos} back={back10} forward={forward10} />
                </div>
                {stageName === "Annotate" &&
                    <div style={{margin: "30px"}}>
                    <Scheme scheme={scheme} />
                </div>
                }
                {stageName === "Survey" &&
                   <Survey />
                }
                
            </div>
            {stageName === "Annotate" &&
                <div style={{margin: "30px"}}>
                    
                    <EnterCodes handleSubmit={handleSubmit} scheme={scheme} handleEntry={handleEntry}/>
                    
                </div>
            }
            <Button 
                handleClick={submitStage} 
                children={stageName === "Survey" ? "Continue to Live Annontation" : "End Experiment"}
                className="mt-4 float-right"
            />
            
        </div>
    )
}