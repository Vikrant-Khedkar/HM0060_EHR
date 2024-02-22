import { useState } from 'react';
import styles from './styles.module.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Layout ({children}) {

    const [openChatBot, setOpenChatBot] = useState(false);

    return (
        <>
        {/* <NavBar /> */}
        <div className={styles.wholeCont} onClick={e=>setOpenChatBot(false)}>
            <div className={styles.layoutCont}>
                <main>{children}</main>
                <div className={styles.chatbotCont}>
                    <img src='/chatBotImg.png' className={styles.chatImg} style={{display: `${openChatBot ? 'none' : 'block'}`}}
                        onClick={e=>{e.stopPropagation(),setOpenChatBot(true)}} 
                    />
                    <iframe src="https://embed.fixie.ai/agents/c5459d3b-531d-4fe5-a472-8de9a417bb1f?debug=1" allow="clipboard-write" 
                        className={`${styles.chatBot} ${openChatBot ? styles.chatBotOpen : ''}`}
                    />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
        </>
    )
}