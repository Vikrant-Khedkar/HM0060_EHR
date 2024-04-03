import {useState, useEffect} from 'react';
import styles from './styles.module.css';
import Head from 'next/head';
import Link from "next/link";
import { useSelector } from "react-redux";
import {useRouter} from 'next/router';

export default function DashboardLeftNavBar() {

    const router = useRouter();
    const {pathname} = router;

    const {user_address} = useSelector(store => store.metamaskLogin);

    //check metamask authentication
    useEffect(() => {
        if(user_address === null)
            router.push('/login');
    },[])

    return (
        <div className={styles.wholeCont}>
            <Head>
                <title>धरती - Records</title>
                <link rel="profile image" href="/logoImg.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Patient records"/>
                <meta name="keywords" content="patient records, health, tract health, health, patients"/>
                <meta name="author" content="Shiva, Vikrant, Hritik"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
                <Link className={`${styles.eachDashboardOption} ${pathname === '/dashboard' ? styles.eachDashboardOptionSelected : ''}`}
                         href='/dashboard'>
                    <img className={styles.eachDashboardOptionIcon} src={pathname === '/dashboard' ? '/dashboardIcon.png' : '/dashboardIcon-white.png'}/>
                    <p className={`${styles.eachDashboardOptionText} ${pathname === '/dashboard' ? styles.eachDashboardOptionTextSelected : ''}`}>Dashboard</p>
                </Link>
                <Link className={`${styles.eachDashboardOption} ${pathname === '/upload' ? styles.eachDashboardOptionSelected : ''}`} 
                        href='/upload'>
                    <img className={styles.eachDashboardOptionIcon} src={pathname === '/upload' ? '/addRecordsIcon.png' : '/addRecordsIcon-white.png'}/>
                    <p className={`${styles.eachDashboardOptionText} ${pathname === '/upload' ? styles.eachDashboardOptionTextSelected : ''}`}>Add Record</p>
                </Link>
                <Link className={`${styles.eachDashboardOption} ${pathname.includes('/records') ? styles.eachDashboardOptionSelected : ''}`} 
                        href='/records'>
                    <img className={styles.eachDashboardOptionIcon} src={pathname.includes('/records') ? '/layerIcon.png' : '/layerIcon-white.png'}/>
                    <p className={`${styles.eachDashboardOptionText} ${pathname.includes('/records') ? styles.eachDashboardOptionTextSelected : ''}`}>Records</p>
                </Link>
                <Link className={`${styles.eachDashboardOption} ${pathname.includes('/psychology-assessment') ? styles.eachDashboardOptionSelected : ''}`} 
                        href='/psychology-assessment'>
                    <img className={styles.eachDashboardOptionIcon} src={pathname.includes('/psychology-assessment') ? '/assessmentIcon.png' : '/assessmentIcon-white.png'}/>
                    <p className={`${styles.eachDashboardOptionText} ${pathname.includes('/psychology-assessment') ? styles.eachDashboardOptionTextSelected : ''}`}>Assessment</p>
                </Link>
                {/* <Link className={styles.eachDashboardOption} href='/dashboard'>
                    <img className={styles.eachDashboardOptionIcon} src='/graphIcon.png'/>
                    <p className={styles.eachDashboardOptionText}>Health Insights</p>
                </Link>
                <Link className={styles.eachDashboardOption} href='/dashboard'>
                    <img className={styles.eachDashboardOptionIcon} src='/creditCardIcon.png'/>
                    <p className={styles.eachDashboardOptionText}>Transactions</p>
                </Link> */}
        </div>
    )
}