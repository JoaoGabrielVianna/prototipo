import React from "react";
import './Home.css';
import Search_icon from "../../assets/svgs/icons/search-icon/Search-icon";
import Notification_icon from "../../assets/svgs/icons/notification-icon/Notification-icon";

function Home(){
    return(
        <>
            <header id="header_Home">
                    <div className="search_bar">
                        <Search_icon/>
                        <input placeholder="Pesquisar"/>
                    </div>
                    <div className="notification_div">
                        <Notification_icon/>
                    </div>
                    
                </header>
                
            <main id="main_Home">
                
                <h1>PAGINA HOME</h1>
            </main>
        </>
    )
}

export default Home;