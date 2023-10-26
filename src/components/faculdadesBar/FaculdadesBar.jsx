import React, { useState } from "react";
import './FaculdadesBar.css';
import DadosFaculdade from '../../data/faculdades.json';
import Follow from "../../assets/svgs/icons/follow/Follow";
function FaculdadesBar({hide}){
    const [follow, setFollow] = useState(0);

    return(
        <>
            <ul id="main_FaculdadesBar" style={{height: hide ? '150px' : '0px', transition: '.1s ease-in-out'}}>
                {DadosFaculdade.map((faculdade, i) => (
                    <div key={faculdade.id}>
                        <img src={faculdade.foto} alt="" />
                        <h1>{faculdade.nome}</h1>
                        <div className="follow_button" onClick={() => setFollow(faculdade.id)}><Follow follow={follow === faculdade.id ? follow : ''}/></div>
                        
                        
                    </div>
                ))}
        </ul>
        </>
    )
}

export default FaculdadesBar;