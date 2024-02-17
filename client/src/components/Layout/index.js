import styles from './styles.module.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Layout ({children}) {

    return (
        <>
        {/* <NavBar /> */}
        <div className={styles.wholeCont}>
            <div className={styles.layoutCont}>
                <main>{children}</main>
            </div>
            {/* <Footer /> */}
        </div>
        </>
    )
}