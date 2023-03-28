import React from "react";

export function Video({vidURL, ref, id, audioOn, audioURL}) {
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