import { useEffect, useMemo, useRef, useState } from "react";
import styles from './styles.module.css';
import routes from '../../../utils/routes';
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import {useSelector} from 'react-redux';
import DashboardLeftNavBar from "../DashboardLeftNavBar";

export default function DashboardTopNavBar ({pageTitle, pageTitleImg}) {

    const searchURL = `${routes.baseUrl}${routes.api.search}`;

    const searchInputRef = useRef();

    const [searchInput, setSearchInput] = useState('');
    const [dropDown, setDropDown] = useState([]);

    // const response = useMemo(() => {
    //     axios.post(searchURL , searchInput,{
    //         headers :{
    //             "Content-Type" : "application/json"
    //         }
    //     })
    //     .then((resp) => {
    //         setDropDown(resp);
    //     })
    //     .catch(err => console.log("Error : ",err.message));
    // },[searchInput]);

    return (
        <div className={styles.rightTopCont} >
            <div className={styles.rightTopLeftCont} >
                <img className={styles.rightTopLeftImg} src={`/${pageTitleImg}.png`}/>
                <button className={styles.rightTopLeftText}>{pageTitle}</button>
            </div>
            <div className={styles.rightTopMidCont} onClick={e => {searchInputRef.current.focus()}} >
                <img className={styles.eachDashboardOptionIcon} src='/searchIcon.png'/>
                <input className={styles.searchInput} placeholder='Search'
                    ref= {searchInputRef}
                    onChange={e => setSearchInput(e.target.value)}
                />
                {dropDown.length && <div className={styles.dropdownCont}>
                    {dropDown?.map((result) => {
                        return (
                            <div key={result} className={styles.eachDropDown}>
                                <p className={styles.eachDropDownText}>{result}</p>
                            </div>
                        )
                    })}
                </div>}
            </div>
            <div className={styles.rightTopRightCont} >
                <img className={styles.rightTopRightImg} src='/loginImg.png'/>
                <p className={styles.rightTopLeftText2}>{'John'}</p>
            </div>
        </div>
    )
}