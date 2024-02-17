import React, { useState,useEffect,useRef } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import axios from 'axios';
import routes from '../../../utils/routes';

export default function LoginComponent() {

    const loginURL = `${routes.baseUrl}${routes.api.login}`;

    const inputRef = useRef();

    useEffect(() =>{
        inputRef.current.focus();
    },[])

    const [loginCreds , setLoginCreds] = useState({email : '',password : ''});
    const [selected, setSelected] = useState('email');
    const [hidePassword , setHidePassword] = useState(true);

    const inputHandler = (e) => {

        const temp = {...loginCreds};
        if(e.target.name === 'email'){
            temp.email = e.target.value;
        }
        if(e.target.name === 'password'){
            temp.password = e.target.value;
        }
        setLoginCreds(temp);
    }

    const loginHandler = () => {
        console.log('called');
        const response = axios.post( loginURL, {
            loginCreds : loginCreds
        })
        .then(res => {
            if(res === 'login successful')
                console.log('login successful');
            else
                console.log('login unsuccessful');
        })
        .catch(err => console.log("ERR: ",err.message));
    }

    console.log(loginCreds);

    console.log(loginURL);

    return (
        <div className={styles.wholeCont} >
            <div className={styles.leftCont}>
                <h1 className={styles.leftContTitle}>Your Intelligent Health Companion</h1>
                <img src='/loginPageImg.png' className={styles.leftContImg} alt='medical image' />
            </div>
            <div className={styles.rightCont}>
                <p className={styles.rightContTitle}>Welcome Back</p>
                <div className={styles.rightMidCont}>
                    <label className={`${styles.inputCont} ${selected === 'email'? styles.inputContClicked : ''}`} onClick={e => setSelected('email')}>
                        <p className={`${styles.inputTitle} ${selected === 'email'|| loginCreds.email != ''  ? styles.inputTitleClicked : ''}`}>Email</p>
                        <input className={`${styles.inputBox} ${selected === 'email' ? styles.inputBoxClicked : ''}`}
                        name='email'
                        ref={inputRef}
                        onChange={(e) => {e.stopPropagation(),inputHandler(e)}}
                        />
                    </label>
                    <label className={`${styles.inputCont} ${selected === 'password'? styles.inputContClicked : ''}`} onClick={e => setSelected('password')}>
                        <p className={`${styles.inputTitle} ${selected === 'password'|| loginCreds.password != ''  ? styles.inputTitleClicked : ''}`}>Password</p>
                        <input className={`${styles.inputBox} ${selected === 'password' ? styles.inputBoxClicked : ''}`}
                        name='password'
                        onChange={(e) => {e.stopPropagation(),inputHandler(e)}}
                        type={hidePassword ? "password" :"text"}
                        />
                        <img src='/passwordShow.png' className={styles.passwordShowBtn} alt='Password hide button' 
                            onClick = {e => {setHidePassword(!hidePassword)}}
                        />
                    </label>
                    <p className={styles.rightMidForgotText}>Forgot Password?</p>
                    <div className={styles.loginButton} onClick={loginHandler}>
                        Login
                    </div>
                </div>
                <div className={styles.orDiv}>
                    <hr className={styles.line}/>
                    <p className={styles.orText}>OR</p>
                    <hr className={styles.line}/>
                </div>
                <div className={styles.rightBottomCont}>
                    <img className={styles.eachAuthIcon}
                        src='/googleAuthIcon.png' alt='google authentication icon' />
                    <img className={styles.eachAuthIcon}
                        src='/AppleAuthIcon.png' alt='google authentication icon' />
                    <img className={styles.eachAuthIcon}
                        src='/phoneAuthIcon.png' alt='google authentication icon' />
                </div>
                <Link href={`/${routes.api.signup}`} className={styles.bottomTextCont}>
                    <p className={styles.bottomText}>Don&apos; have a Account?</p>
                    <p className={styles.bottomTextRed}>Register</p>
                </Link>
            </div>
        </div>
    )
}