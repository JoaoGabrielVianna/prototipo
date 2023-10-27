import React from "react";

function Circle_Big( {positionX, positionY} ) {
    return (
        <>
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="circle_big" style={{left: `${positionX}px`, top: `${positionY}px`}}>
                <circle cx="33.5" cy="33.5" r="33" stroke="white" strokeOpacity="0.12" />
            </svg>

        </>
    )
}

export default Circle_Big;