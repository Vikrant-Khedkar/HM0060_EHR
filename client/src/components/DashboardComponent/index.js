import { useEffect, useState } from "react";
import styles from './styles.module.css';
import routes from '../../../utils/routes';
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import {useSelector} from 'react-redux';
import DashboardLeftNavBar from "../DashboardLeftNavBar";
import DashboardTopNavBar from '../DashboardTopNavBar';

export default function DashboardComponent () {

    const fileURL = `${routes.baseUrl}${routes.api.files}`;
    // const fileURL = 'http://localhost:5000/getRecords';
    
    const router = useRouter();

    const {user_address} = useSelector(store => store.metamaskLogin)

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        if(user_address === null)
            router.push('/login');
    },[])

    useEffect(() => {
        axios.post(fileURL,  {userAddress : user_address})
        .then(resp => {
            setDocs(resp.data.records);
            console.log(resp.data.records);
        })
        .catch(err => {
            console.log("Error: ",err.message);
        })
    },[user_address]);

    return (
        <div className={styles.wholeCont} >
            <Head>
                <title>धरती - Records</title>
                <link rel="profile image" href="/logoImg.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Patient records"/>
                <meta name="keywords" content="patient records, health, tract health, health, patients"/>
                <meta name="author" content="Shiva, Vikrant, Hritik"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <DashboardLeftNavBar />
            <div className={styles.rightCont} >
                <DashboardTopNavBar pageTitle='Dashboard' pageTitleImg='dashboardIcon'/>
                <div className={styles.rightBottomCont} >
                    <div className={styles.rightBottomLeftCont} >
                        <p className={styles.nameText}>Hello {'Name'}</p>
                    </div>
                    <div className={styles.rightBottomRightCont} >
                        <div className={styles.rightBottomRightBottomCont} >
                            <p className={styles.text2}>Total Records</p>
                            <p className={styles.text3}>{docs.length}</p>
                        </div>
                        <div className={styles.rightBottomRightTopCont} >
                        {
                            docs?.map((eachDoc) => {
                                return (
                                    <Link key={eachDoc} href={`${eachDoc.file}`} legacyBehavior>
                                        <a target='_blank' className={styles.eachDocCont}>
                                            <img src='/docIcon.png' alt={eachDoc.filename}
                                                className={styles.eachDocImg}
                                            />
                                            <h3 className={styles.eachDocTitle}>{eachDoc.filename}</h3>
                                        </a>
                                    </Link>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}