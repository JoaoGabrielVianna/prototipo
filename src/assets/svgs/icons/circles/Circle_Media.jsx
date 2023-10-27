import React from "react";

function Circle_Media( {positionX , positionY} ) {
    return (
        <>
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="circle_media" style={{left: `${positionX}px`, top: `${positionY}px`}}>
                    <circle cx="23.5" cy="23.5" r="23" stroke="white" strokeOpacity="0.12" />
            </svg>

        </>
    )
}

export default Circle_Media;