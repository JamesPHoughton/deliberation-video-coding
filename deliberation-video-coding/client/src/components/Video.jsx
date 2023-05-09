import React from "react";

export function Video({vidURL, ref, id, audioOn, audioURL}) {
    console.log(audioOn)
    return (
        <div className="Video">
            <video
              id={id}
              preload="auto"
              ref={ref}
              width="500"
            >
              <source
                src={vidURL}
                type="video/webm"
              />
              
            </video>
            {audioOn && (
                <audio>
                    <source 
                        src={audioURL}
                        type="audio/webm"
                    />
                </audio>
            )}
        </div>
      );
}