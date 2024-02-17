import { useEffect, useState, useRef } from 'react';
import styles from './styles.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { metamaskLogin, metamaskLogout } from '../../features/model/metamaskSlice';
import Web3 from 'web3';
import DashboardLeftNavBar from '../DashboardLeftNavBar';
import DashboardTopNavBar from '../DashboardTopNavBar';
import MetamaskLogo from '../MetamaskLogo';

export default function MetamaskLogin() {

    const router = useRouter();

    const searchInputRef = useRef();

    const dispatch = useDispatch();

    const {isLoggedIn, user_address} = useSelector(store => store.metamaskLogin);

    const [searchInput, setSearchInput] = useState('');
    const [dropDown, setDropDown] = useState([]);
    const [account, setAccount] = useState(null);

    const metamaskAuthHandler = async () => {
        const web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
        }
        catch(error) {
            if(error.code === 4001)
                alert("You have denied the connection request.");
            else if( error.code === 4002)
                alert("Please install Metamask");
            else {
                alert(error.message);
            }
            return;
        }

        await web3.eth.getAccounts()
        .then((accounts) => {
            dispatch(metamaskLogin({account :accounts[0]}));
        })
        .then(() => {
            alert("Logged In sucessfully");
        })
        .then(() => {
            router.back();
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className={styles.wholeCont} style={{zIndex:'1'}}>
            <Head>
                <title>धरती - Login</title>
                <link rel="profile image" href="/logoImg.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Patient records"/>
                <meta name="keywords" content="patient records, health, tract health, health, patients"/>
                <meta name="author" content="Shiva, Vikrant, Hritik"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <DashboardLeftNavBar />
            <div className={styles.rightCont} >
                <DashboardTopNavBar pageTitle='Login' pageTitleImg='loginMiniIcon' />
                {user_address === null
                  ?
                    <div className={styles.rightBottomCont} style={{position:"relative"}} onClick={metamaskAuthHandler} >
                        {/* <MetamaskLogo /> */}
                        <div className={styles.metamaskCont} >
                            <div className={styles.metamaskImg}></div>
                            {/* <iframe src='https://metamask.github.io/logo/normal/index.html'  style={{width:'100%', height:'100%'}}
                            >
                            </iframe> */}
                            <p className={styles.metamaskText}>Sign in with Metamask</p>
                        </div>
                    </div>
                  :
                    null
                }
            </div>
        </div>
    )
}