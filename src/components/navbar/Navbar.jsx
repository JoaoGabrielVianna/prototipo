import React, { useState } from "react";
import './Navbar.css';
import Destaques_icon from "../../assets/svgs/icons/components/Destaques-icon";
import Faculdade_icon from "../../assets/svgs/icons/components/Faculdade-icon";
import { Link } from "react-router-dom";

function NavBar(){
    const [active, setActive] = useState(2);
    const icons =[
        {name: 'faculdade', local: '/faculdade', iconD: <Faculdade_icon/>, iconA: <Faculdade_icon ativo={true}/>, posX: -0.5},
        {name: 'destaques', local: '/destaques', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: 18.6},
        {name: 'home', local: '/', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: 37.6},
        {name: 'eventos', local: '/eventos', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: 57.2},
        {name: 'profile', local: '/profile', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: 76.3},
    ]

    return(
        <><span id="span_Navbar">
            <main id="main_Navbar">
                <div className="iconsBackground">
                    {icons.map((id, i) =>(
                        <li key={i} className="icon">
                            {/* {active} */}
                            <Link to={id.local} onClick={() => setActive(i)}>
                                {active === i ? id.iconA : id.iconD}
                            </Link>
                            
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