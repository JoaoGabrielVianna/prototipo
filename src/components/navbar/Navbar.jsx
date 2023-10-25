import React, { useState } from "react";
import './Navbar.css';
import Destaques_icon from "../../assets/svgs/icons/components/Destaques-icon";
import Faculdade_icon from "../../assets/svgs/icons/components/Faculdade-icon";

function NavBar(){
    const [active, setActive] = useState(2);
    const icons =[
        {name: 'faculdade', iconD: <Faculdade_icon/>, iconA: <Faculdade_icon ativo={true}/>, posX: -0.5},
        {name: 'destaques', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: 18.6},
        {name: 'home', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: 37.6},
        {name: 'eventos', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: 57.2},
        {name: 'profile', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: 76.3},
    ]

    return(
        <><span id="span_Navbar">
            <main id="main_Navbar">
                <div className="iconsBackground">
                    {icons.map((id, i) =>(
                        <li key={i} className="icon">
                            {/* {active} */}
                            <a href="#" onClick={() => setActive(i)}>
                                {active === i ? id.iconA : id.iconD}
                            </a>
                            
                        </li>
                    ))}
                </div>
                <span style={{left: `${icons[active].posX}%`}} className="indicator"></span>
            </main>
            </span>
        </>
    )
}

export default NavBar;