import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Divisor from "../../assets/svgs/icons/navbar/components/Divisor";
import Faculdade_icon from "../../assets/svgs/icons/navbar/components/Faculdade-icon";
import Destaques_icon from "../../assets/svgs/icons/navbar/components/Destaques-icon";
import Home_icon from "../../assets/svgs/icons/navbar/components/Home-icon";
import Eventos_icon from "../../assets/svgs/icons/navbar/components/Eventos-icon";
import Profile_icon from "../../assets/svgs/icons/navbar/components/Profile-icon";


function NavBar({ show = true }){
    const [active, setActive] = useState(2);
    const icons =[
        {name: 'faculdade', local: '/faculdade', iconD: <Faculdade_icon/>, iconA: <Faculdade_icon ativo={true}/>, posX: -100.5},
        {name: 'destaques', local: '/destaques', iconD: <Destaques_icon/>, iconA: <Destaques_icon ativo={true}/>, posX: -82},
        {name: 'home', local: '/', iconD: <Home_icon/>, iconA: <Home_icon ativo={true}/>, posX: -62.5},
        {name: 'eventos', local: '/eventos', iconD: <Eventos_icon/>, iconA: <Eventos_icon ativo={true}/>, posX: -43},
        {name: 'profile', local: '/profile', iconD: <Profile_icon/>, iconA: <Profile_icon ativo={true}/>, posX: -23},
    ]

    return(
        <>
            {show ? <span id="span_Navbar">
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
                <span className="divisor" style={{left: `${icons[active].posX}%`, transition: '.5s ease'}}><Divisor/></span>
                {/* <span style={{left: `${icons[active].posX}%`, transition: '.5s ease'}} className="indicator"></span> */}
            </main>
            </span>: ''}
        </>
    )
}

export default NavBar;