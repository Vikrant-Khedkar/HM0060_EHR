import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from './styles.module.css';
import routes from '../../../utils/routes';
import axios from "axios";
import Link from 'next/link';
import Head from "next/head";
import { useSelector } from "react-redux";
import DashboardLeftNavBar from '../DashboardLeftNavBar';
import DashboardTopNavBar from '../DashboardTopNavBar';

export default function RecordsMonthComponent ({month}) {

    const fileURL = `${routes.baseUrl}${routes.api.files}`;

    const {user_address} = useSelector(store => store.metamaskLogin);

    const [currMonth, setCurrMonth] = useState(month);
    const [currYear, setCurrYear] = useState();

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [docs, setDocs] = useState([ {
                        "0": "a1456900a97d231fdb6cf3fef617624b410e424198aa127cb240047c410d9742",
                        "1": "0x9474FC4540090c90329A05759941e0834B3719E5",
                        "2": "sss",
                        "3": "2024",
                        "4": "ssssss",
                        "5": "ipfs://QmWW1bkRDcUwk5QEH3D4zrxJWMC2DyVa49R4mbFv45XSEv",
                        "6": "2024-01-30T09:24:19.470Z",
                        "_length_": 7,
                        "id": "a1456900a97d231fdb6cf3fef617624b410e424198aa127cb240047c410d9742",
                        "user_address": "0x9474FC4540090c90329A05759941e0834B3719E5",
                        "title": "sss",
                        "date": "2024",
                        "filename": "ssssss",
                        "file": "ipfs://QmWW1bkRDcUwk5QEH3D4zrxJWMC2DyVa49R4mbFv45XSEv",
                        "created_at": "2024-01-30T09:24:19.470Z"
                    },
                    {
                        "0": "152c166a5c70906ecdee580771e342fa41b10fba7597ebf2e5fedef49a296c05",
                        "1": "0x9474FC4540090c90329A05759941e0834B3719E5",
                        "2": "sss",
                        "3": "2024",
                        "4": "ssssss",
                        "5": "ipfs://QmWW1bkRDcUwk5QEH3D4zrxJWMC2DyVa49R4mbFv45XSEv",
                        "6": "2024-01-30T09:24:24.280Z",
                        "_length_": 7,
                        "id": "152c166a5c70906ecdee580771e342fa41b10fba7597ebf2e5fedef49a296c05",
                        "user_address": "0x9474FC4540090c90329A05759941e0834B3719E5",
                        "title": "sss",
                        "date": "2024",
                        "filename": "ssssss",
                        "file": "ipfs://QmWW1bkRDcUwk5QEH3D4zrxJWMC2DyVa49R4mbFv45XSEv",
                        "created_at": "2024-01-30T09:24:24.280Z"
                    },
                    {
                        "0": "152c166a5c70906ecdee580771e342fa41b10fba7597ebf2e5fedef49a296c05",
                        "1": "0x9474FC4540090c90329A05759941e0834B3719E5",
                        "2": "sss",
                        "3": "2024",
                        "4": "ssssss",
                        "5": "ipfs://QmWW1bkRDcUwk5QEH3D4zrxJWMC2DyVa49R4mbFv45XSEv",
                        "6": "2024-01-30T09:24:24.280Z",
                        "_length_": 7,
                        "id": "152c166a5c70906ecdee580771e342fa41b10fba7597ebf2e5fedef49a296c05",
                        "user_address": "0x9474FC4540090c90329A05759941e0834B3719E5",
                        "title": "sss",
                        "date": "2024",
                        "filename": "ssssss",
                        "file": "ipfs://QmWW1bkRDcUwk5QEH3D4zrxJWMC2DyVa49R4mbFv45XSEv",
                        "created_at": "2023-06-30T09:24:24.280Z"
                    }
                ]);

    useEffect(() => {
        if(month && (month.slice(0,4) === "June" || month.slice(0,4) === "July")){
            setCurrMonth(month.slice(0,4));
            setCurrYear(month.slice(4,9))
        }
        else if(month){
            setCurrMonth(month.slice(0,3));
            setCurrYear(month.slice(3,8));
        }
    });

    useEffect(() => {
        axios.post(fileURL, user_address)
        .then((resp) => {
            setDocs(resp)
        })
        .catch(err => console.log("ERROR: ",err.message))
    },[])

    const openPdf = (doc) => {
        if(window !== undefined)
            window.open(doc, '_blank');
    }

    return (
        <div className={styles.wholeCont} >
            <Head>
                <title>धरती - {month} records</title>
                <link rel="profile image" href="/logoImg.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Patient records"/>
                <meta name="keywords" content="patient records, health, tract health, health, patients"/>
                <meta name="author" content="Shiva, Vikrant, Hritik"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <DashboardLeftNavBar />
            <div className={styles.rightCont} >
                <DashboardTopNavBar pageTitle={currMonth + ' ' + currYear} pageTitleImg='addRecordsIcon' />
                <div className={styles.rightBottomCont} >
                    <div className={styles.innerForm}>
                        <div className={styles.rightBottomTopCont}>
                        {
                            months?.map((eachMonth) => {
                                return (
                                    <Link key={eachMonth} className={styles.eachYearFolderCont}
                                        href={`/records/${eachMonth}${currYear}`}>
                                        {/* <img src='/folderImg.png'
                                            className={styles.eachYearFolderImg}
                                        /> */}
                                        <p className={styles.yearText}>{eachMonth}</p>
                                    </Link>
                                )
                            })
                        }
                        </div>
                        <div className={`${styles.rightBottomBottomCont} ${docs.length === 0 ? styles.rightBottomBottomContNoFiles : ''}`}>
                        {
                            docs?.filter(eachDoc => 
                                eachDoc.created_at.slice(5,7) == months.indexOf(currMonth) + 1 && eachDoc.created_at.slice(0,4) === currYear
                            )
                            ?.map((eachDoc) => {
                                return (
                                    <div key={eachDoc} className={styles.eachMonthCont}
                                        onClick={e => openPdf(eachDoc.file)} >
                                        <div className={styles.dot}></div>
                                        <p className={styles.monthText}>{eachDoc.filename}</p>
                                    </div>
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