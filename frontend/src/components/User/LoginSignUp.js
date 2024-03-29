import React,{Fragment, useRef, useState} from "react";
import "./LoginSignUp.css";

import Loader from "../layout/Loader/Loader";
import {Link} from "react-router-dom";
import {MailOutlineIcon} from "@mui/icons-material";
import {LockOpenIcon} from "@mui/icons-material";
import { Face } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors,login ,register} from "../../actions/userAction";


const LoginSignUp = ( ) => {

    const dispatch = useDispatch();

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const [user,setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const {name,email,password} = user;
    const [avatar,setAvatar] = useState();
    const [avatarPreview,setAvatarPreview] = useState("/Profile.png");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail,loginPassword));
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name",name);
        myForm.set("email",email);
        myForm.set("password",password);
        myForm.set("avatar",avatar);
        dispatch(register(myForm));
    };

    const registerDataChange= (e) => {
        if(e.target.name === "avaatar")
        {
            const reader = new FileReader();

        reader.onload = () => {
            if(reader.readyState === 2)
            {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);

        }
        else{
            setUser({...user,[e.target.name]:e.target.value});
        }

    };




    const switchTabs = (e,tab) => {
        if(tab === "login"){
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if(tab === "register"){
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }

    };
    return (
        <Fragment>
            {loading?<Loader/>:
            (
                
            <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
                <div>
                    <div className="login_signUp_toggle">
                        <p onClick = {(e) => switchTabs(e,"login")}>LOGIN</p>
                        <p onClick = {(e) => switchTabs(e,"register")}>REGISTER</p>
                    </div>
                    <button ref={switcherTab}></button>
                </div>
                <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                    <div className="loginEmail">
                    <MailOutlineIcon />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    </div>
                    <div className="loginPassword">
              <LockOpenIcon />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/password/forgot">Forget Password ?</Link>
            <input type="submit" value="Login" className="loginBtn" />
                </form>
            </div>
        </div>
            )}
        </Fragment>
    )
}

export default LoginSignUp;