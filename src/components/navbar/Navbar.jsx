import React, { useState } from "react";
import './Navbar.css';
import Destaque_icon from "../../assets/svgs/icons/components/Faculdade-icon";

function NavBar(){
    const [active, setActive] = useState(2);
    const icons =[
        {name: '', iconD: <Destaque_icon/>, iconA: <Destaque_icon ativo={true}/>, posX: '-138px'},
        {name: '', iconD: <Destaque_icon/>, iconA: <Destaque_icon ativo={true}/>, posX: '-70px'},
        {name: '', iconD: <Destaque_icon/>, iconA: <Destaque_icon ativo={true}/>, posX: ''},
        {name: '', iconD: <Destaque_icon/>, iconA: <Destaque_icon ativo={true}/>, posX: '70px'},
        {name: '', iconD: <Destaque_icon/>, iconA: <Destaque_icon ativo={true}/>, posX: '137px'},
    ]

    return(
        <>
            <main>
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
                <span style={{width: 83, height: 83, position: 'absolute', border: '2px solid white', borderRadius: '100%', backgroundColor: '', translate: `${icons[active].posX}`}} className="indicator"></span>
            </main>
        </>
    )
}

export default NavBar;