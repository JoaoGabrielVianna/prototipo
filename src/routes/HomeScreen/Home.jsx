import React, { useState} from "react";
import './Home.css';
import Search_icon from "../../assets/svgs/icons/search-icon/Search-icon";
import Notification_icon from "../../assets/svgs/icons/notification-icon/Notification-icon";
import Up_Down from "../../assets/svgs/icons/up_down/Up_Down";
import FaculdadesBar from "../../components/faculdadesBar/FaculdadesBar";

const Header_Home = () => {
    const [hide, setHide] = useState(false);

    return(
        <>
            <header id="header_Home" style={{height: hide ? 280 : ''}}>
                    <div className="search_bar">
                        <span>
                            <Search_icon/>
                            <input placeholder="Pesquisar"/>
                        </span> 
                            <div className="notification_div">
                                <Notification_icon/>
                            </div>
                        
                    </div>
                    
                    <div className="faculdade_bar">
                        <h1>Faculdades</h1>
                        <div className="icon" onClick={() => setHide(!hide)}>
                            <Up_Down state={hide}/>
                        </div>
                    </div>
                        <FaculdadesBar hide={hide}/>
                    
                </header>
                
        </>
    )
}

function Home(){
    return(
        <>
            <Header_Home/>
                
            <main id="main_Home">
                
                <h1>PAGINA HOME</h1>
            </main>
        </>
    )
}

export default Home;