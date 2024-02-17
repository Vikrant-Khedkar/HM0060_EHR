import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { useState } from 'react';

export default function NavBar () {

    const [selected, setSelected] = useState('Home');
    const [openMenu , setOpenMenu] = useState(true);
    const [slideCloser , setSlideCloser] = useState(false);
    const [mobileMode, setMobileMode] = useState(true);

    // useEffect(() => {
    //     if(typeof(window) !== undefined && window.innerWidth < 650)
    //         setMobileMode(true);
    //     else if(typeof(window) !== undefined && window.innerWidth > 650)
    //         setMobileMode(false);
    //     console.log(mobileMode);
    // },[])

    const menuHandler = () => {
        if(!openMenu)
            setOpenMenu(true);
        else {
            setTimeout(() => {
                setOpenMenu(false);
            },5000);
        }
    }

    return (
        <div className={styles.wholeCont}>
            <div className={styles.logoCont}>
                <img className={styles.logoImg} src='/logoImg.jpg' alt='title name' />
                <p className={styles.logoTitle}>धरती</p>
            </div>
            {/* {mobileMode && */}
                <div className={`${styles.menuCloseBtnCont} ${openMenu ? styles.menuCloseBtnContMenuOpen : ''}`} onClick={e => {setOpenMenu(!openMenu),setSlideCloser(true)}}>
                    <hr className={`${styles.endLines} ${openMenu ? styles.endLinesMenuOpen1 : ''}`}/>
                    <hr className={`${styles.midLine} ${openMenu ? styles.midLineMenuOpen : ''}`}/>
                    <hr className={`${styles.endLines} ${openMenu ? styles.endLinesMenuOpen2 : ''}`}/>
                </div>
            {/* } */}
            {/* <div className={`${!mobileMode ? styles.menuCont : (openMenu ? styles.menuContMenuOpen : styles.menuContMenuClose)}`} 
                    onClick={e => e.stopPropagation()} > */}
            <div className={`${styles.menuCont} ${(openMenu ? styles.menuContMenuOpen : styles.menuContMenuClose)}`} 
                    onClick={e => e.stopPropagation()} >
                {/* {openMenu && 
                    <div className={`${styles.menuCloseBtnCont} ${openMenu ? styles.menuCloseBtnContMenuOpen : ''} `} onClick={e => {setSlideCloser(false)}}>
                    <hr className={`${styles.endLines} ${openMenu ? styles.endLinesMenuOpen1 : ''}`}/>
                    <hr className={`${styles.midLine} ${openMenu ? styles.midLineMenuOpen : ''}`}/>
                    <hr className={`${styles.endLines} ${openMenu ? styles.endLinesMenuOpen2 : ''}`}/>
                </div>} */}
                <div className={`${styles.menuOptions} ${selected ==='HOME' ? styles.menuOptionsSelected : ''}`}>
                    <p className={styles.menuOptionsText}>Emergency SOS</p>
                </div>
                <div className={styles.menuOptions}>
                    <p className={styles.menuOptionsText}>HOME</p>
                </div>
                <div className={styles.menuOptions}>
                    <p className={styles.menuOptionsText}>About Us</p>
                </div>
                <div className={styles.menuOptions}>
                    <p className={styles.menuOptionsText}>How to use</p>
                </div>
            </div>
        </div>
    )
}