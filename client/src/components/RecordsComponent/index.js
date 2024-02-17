import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from './styles.module.css';
import routes from '../../../utils/routes';
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useSelector } from "react-redux";
import DashboardLeftNavBar from '../DashboardLeftNavBar';
import DashboardTopNavBar from '../DashboardTopNavBar';

export default function RecordsComponent () {

    const fileURL = `${routes.baseUrl}${routes.api.files}`;

    const [years, setYears] = useState(['2013','2014','2015','2016','2017','2018', '2019', '2020', '2021', '2022','2023']);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const [docs, setDocs] = useState(['Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report', 'Blood Report']);
    const [currYear, setCurrYear] = useState();

    useEffect(() => {
        setCurrYear(years[years.length - 1]);
    },[])

    // useLayoutEffect(() => {

    // },[])

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
                <DashboardTopNavBar pageTitle='Records' pageTitleImg='layerIcon' />
                <div className={styles.rightBottomCont} >
                    <div className={styles.innerForm}>
                        <div className={styles.rightBottomTopCont}>
                        {
                            years?.map((eachYear) => {
                                return (
                                    <div key={eachYear} className={styles.eachYearFolderCont} 
                                        onClick={e => setCurrYear(eachYear)}>
                                        {/* <img src='/folderImg.png'
                                            className={styles.eachYearFolderImg}
                                        /> */}
                                        <p className={styles.yearText}>{eachYear}</p>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className={styles.rightBottomBottomCont}>
                        {
                            months?.map((eachMonth) => {
                                return (
                                    <Link key={eachMonth} className={styles.eachMonthCont}
                                        href={`/records/${eachMonth}${currYear}`}>
                                        <div className={styles.dot}></div>
                                        <p className={styles.monthText}>{eachMonth} &nbsp;{currYear}</p>
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