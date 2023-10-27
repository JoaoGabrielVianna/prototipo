import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";
import EnterButton from "../../components/loginButton/EnterButton";
import RegisterButton from "../../components/loginButton/RegisterButton";
import Email from "../../assets/svgs/icons/email-icon/Email";
import Senha from "../../assets/svgs/icons/senha-icon/Senha";
import Left_Right from "../../assets/svgs/icons/left_right/Left_Right";
import Circle_Big from "../../assets/svgs/icons/circles/Circle_Big";
import Circle_Media from "../../assets/svgs/icons/circles/Circle_Media";
import Circle_Small from "../../assets/svgs/icons/circles/Circle_Small";
// import Google from "../../assets/svgs/icons/google-icon/Google";
// import Facebook from "../../assets/svgs/icons/facebook-icon/Facebook";
// import Mobile from "../../assets/svgs/icons/mobile-icon/Mobile";
// import Outlook from "../../assets/svgs/icons/outlook-icon/Outlook";

function Login() {
    const [registro, setRegister] = useState(false);
    const [login, setLogin] = useState(false);
    return (
        <>
            <main id="main_Login">
                <div className="goBack" style={{ opacity: registro ? 1 : login ? 1 : 0 }} onClick={() => {setRegister(false), setLogin(false)}}><Left_Right /></div>
                <div id="Welcome" style={{ opacity: registro ? 0 : login ? 0 : 1, zIndex: registro ? 0 : 1 }}>
                    <h1>Seja bem-vindo ao NOME DO APP</h1>
                    <p>Lorem ipsum dolor sit amet. Ad minima voluptatum aut volupt explicabo exercitationem ia. Ut incidu peros as</p>

                    <div onClick={() => setLogin(true)}><EnterButton /></div>
                    <span></span>
                    <div onClick={() => setRegister(true)}><RegisterButton /></div>

                </div>

                <div id="Register" style={{ opacity: registro ? 1 : login ? 0 : 0, zIndex: registro ? 1 : 0 }}>
                    <span id="register_email">
                        <Email />
                        <input type="text" placeholder="Digite um e-mail..." style={{ color: 'black' }} />
                    </span>
                    <span id="register_senha">
                        <Senha />
                        <input type="text" placeholder="Digite uma senha..." style={{ color: 'black' }} />
                    </span>

                    <div className="divisoria">
                        <div className="linha"></div>
                        <h1>OU</h1>
                        <div className="linha"></div>
                    </div>

                    <div className="othersSocialMedias">
                        <div className="icon"></div>
                        <div className="icon"></div>
                        <div className="icon"></div>
                        <div className="icon"></div>
                    </div>

                    <RegisterButton ativado={true} />
                </div>

                <div id="Login" style={{ opacity: login ? 1 : registro ? 0 : 0 , zIndex: login ? 1 : 0 }}>
                    <span id="login_email" >
                            <Email />
                            <input type="text" placeholder="Digite um e-mail..." style={{ color: 'black' }} />
                    </span>
                    <span id="login_senha">
                            <Senha />
                            <input type="text" placeholder="Digite uma senha..." style={{ color: 'black' }} />
                    </span>

                    <Link to={'/home'}><EnterButton /></Link>
                </div>

                <span className="circles">
                    <Circle_Big positionX={login ? 300 : registro ? 80: 100} positionY={login ? 20 : registro ? 60 : 100}/>
                    <Circle_Media positionX={login ? 190 : registro ? 230 : 290} positionY={login ? 100 : registro ? 130:  70}/>
                    <Circle_Small positionX={login ? 100 : registro ? 300 : 170} positionY={login ? 60 : registro ? 50 : 40}/>

                    <Circle_Big positionX={login ? 290 : registro ? 230: 100} positionY={login ? 540 : registro ? 570 : 660}/>
                    <Circle_Media positionX={login ? 100 : registro ? 150 : 290} positionY={login ? 650 : registro ? 650:  580}/>
                    <Circle_Small positionX={login ? 320 : registro ? 320 : 370} positionY={login ? 680 : registro ? 740 : 750}/>
                </span>
            </main>
        </>
    )
}

export default Login;