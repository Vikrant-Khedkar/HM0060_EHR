import Link from 'next/link';
import styles from './styles.module.css';
import { useRef, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import routes from '../../../utils/routes';

export default function SignupComponent() {

    const signupURL = `${routes.baseUrl}${routes.api.signup}`;

    const inputRef = useRef();
    const confrmP = useRef();

    useEffect(() =>{
        inputRef.current.focus();
    },[])

    const [selected, setSelected] = useState('email');
    const [loginCreds, setLoginCreds] = useState({email : '' , password : ''});
    const [hidePassword , setHidePassword] = useState(true);
    const [passwordConfirmed , setPasswordConfirmed] = useState();
    const [confirmPass , setConfirmPass] = useState();

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

    // const confirmPassword = (e) => {
    //     if(e.target.value === loginCreds.password)
    //         setPasswordConfirmed(true);
    //     else
    //         setPasswordConfirmed(false);
    // }

    const confrm = useMemo(() => {
        if(confirmPass === loginCreds.password)
            setPasswordConfirmed(true);
        else
            setPasswordConfirmed(false);
    },[confirmPass,loginCreds.password])

    const signupHandler = () => {

        if(passwordConfirmed) {
            const response = axios.post(signupURL, {
                loginCreds : loginCreds
            })
            .then(resp => {
                if(resp === 'saved successfully')
                    console.log('saved successfully');
                else
                    console.log('not saved');
            })
            .catch(err => console.log("ERR: ",err.message));
        }
    }

    console.log(loginCreds);

    return (
        <div className={styles.wholeCont} onClick={e => setSelected('')}>
            <h1 className={styles.registrationTitle}>Register as a new user...</h1>
            <div className={styles.registrationCont}>
                <label className={`${styles.inputCont} ${selected === 'email'? styles.inputContClicked : ''}`} 
                    onClick={e => {e.stopPropagation(),setSelected('email')}}>
                    <p className={`${styles.inputTitle} ${selected === 'email'|| loginCreds.email != ''  ? styles.inputTitleClicked : ''}`}>Email</p>
                    <input className={`${styles.inputBox} ${selected === 'email' ? styles.inputBoxClicked : ''}`}
                        name='email'
                        ref={inputRef}
                        onChange={(e) => {e.stopPropagation(),inputHandler(e)}}
                    />
                </label>
                <label className={`${styles.inputCont} ${selected === 'password'? styles.inputContClicked : ''} ${confirmPass ? (!passwordConfirmed ? styles.inputContWrong : styles.inputContRight) : ''}`}
                    onClick={e => {e.stopPropagation(),setSelected('password')}}>
                    <p className={`${styles.inputTitle} ${selected === 'password'|| loginCreds.password != ''  ? styles.inputTitleClicked : ''}`}>Password</p>
                    <input className={`${styles.inputBox} ${selected === 'password' ? styles.inputBoxClicked : ''} `}
                        name='password'
                        onChange={(e) => {e.stopPropagation(),inputHandler(e)}}
                        type={hidePassword ? "password" :"text"}
                    />
                    <img src='/passwordShow.png' className={styles.passwordShowBtn} alt='Password hide button' 
                        onClick = {e => {e.stopPropagation(),setHidePassword(!hidePassword)}}
                    />
                </label>
                <label className={`${styles.inputCont} ${selected === 'confirmPassword'? styles.inputContClicked : ''} ${confirmPass ? (!passwordConfirmed ? styles.inputContWrong : styles.inputContRight) : ''}`} 
                    onClick={e => {e.stopPropagation(),setSelected('confirmPassword')}}>
                    <p className={`${styles.inputTitle} ${selected === 'confirmPassword'|| confirmPass  ? styles.inputTitleClicked : ''}`}>Confirm Password</p>
                    <input className={`${styles.inputBox} ${selected === 'confirmPassword' ? styles.inputBoxClicked : ''} `}
                        name='confirmPassword'
                        ref={confrmP}
                        onChange={(e) => {e.stopPropagation(),setConfirmPass(e.target.value)}}
                        type={hidePassword ? "password" :"text"}
                    />
                    <img src='/passwordShow.png' className={styles.passwordShowBtn} alt='Password hide button' 
                        onClick = {e => {e.stopPropagation(),setHidePassword(!hidePassword)}}
                    />
                </label>
                <div className={styles.signupButton} onClick={signupHandler}>
                    Sign up
                </div>
                <Link href={`/${routes.api.login}`} className={styles.bottomTextCont}>
                    <p className={styles.bottomText}>Already have an Account?</p>
                    <p className={styles.bottomTextRed}>Login In</p>
                </Link>
                <div className={styles.orDiv}>
                    <hr className={styles.line}/>
                    <p className={styles.orText}>OR</p>
                    <hr className={styles.line}/>
                </div>
                <div className={styles.bottomCont}>
                    <img className={styles.eachAuthIcon}
                        src='/googleAuthIcon.png' alt='google authentication icon' />
                    <img className={styles.eachAuthIcon}
                        src='/AppleAuthIcon.png' alt='google authentication icon' />
                    <img className={styles.eachAuthIcon}
                        src='/phoneAuthIcon.png' alt='google authentication icon' />
                </div>
            </div>
            <img className={styles.img1} src='/signupImg1.png' alt='signup image'/>
            <img className={styles.img2} src='/signupImg2.png' alt='signup image'/>
        </div>
    )
}