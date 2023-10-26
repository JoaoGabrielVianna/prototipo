import React, { useState } from "react";
import './Login.css';
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
                    <EnterButton />
                </div>
            </main>

        </>
    )
}

export default Login;