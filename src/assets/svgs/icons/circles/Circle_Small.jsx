import React from "react";

function Circle_Small( {positionX, positionY} ) {
    return (
        <>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="circle_small" style={{left: `${positionX}px`, top: `${positionY}px`}}>
                <circle cx="6.5" cy="6.5" r="6" stroke="white" stroke-opacity="0.12" />
            </svg>

        </>
    )
}

export default Circle_Small;