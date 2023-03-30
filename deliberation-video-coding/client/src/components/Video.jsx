import React from "react";

export function Video({vidURL, ref, id, audioOn, audioURL}) {
    console.log(audioOn)
    return (
        <div className="Video">
            <video
              id={id}
              preload="auto"
              ref={ref}
              width="250"
              controls
            >
              <source
                src={vidURL}
                type="video/webm"
              />
              
            </video>
            {audioOn && (
                <audio
                controls>
                    <source 
                        src={audioURL}
                        type="audio/webm"
                    />
                </audio>
            )}
        </div>
      );
}