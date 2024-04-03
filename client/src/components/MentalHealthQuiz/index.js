import { useState } from "react";
import styles from './styles.module.css';
import DashboardLeftNavBar from "../DashboardLeftNavBar";

export default function MentalHealthQuiz () {

    const questions = [
                        {
                            "question": "Do you often feel sad or hopeless?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Occasionally",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Have you experienced a loss of interest in activities you once enjoyed?",
                            "options": {
                            "a": "Yes, definitely",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Do you often feel anxious or worried without a specific reason?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Have you experienced changes in your sleep patterns, such as insomnia or oversleeping?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Occasionally",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Do you struggle with concentrating on tasks or making decisions?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Have you experienced a sudden change in your appetite, either eating significantly more or less than usual?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Occasionally",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Do you often feel fatigued or lacking in energy?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Have you had thoughts of harming yourself or ending your life?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Do you find it difficult to cope with stress?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Have you noticed changes in your mood, such as frequent mood swings?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Occasionally",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Do you often feel overwhelmed by daily tasks or responsibilities?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Have you experienced physical symptoms such as headaches or digestive issues without a clear medical cause?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Occasionally",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Do you avoid social interactions or isolate yourself from others?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Have you experienced a decrease in your motivation or productivity levels?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Occasionally",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        },
                        {
                            "question": "Do you have trouble expressing your emotions or feel emotionally numb?",
                            "options": {
                            "a": "Yes, frequently",
                            "b": "Sometimes",
                            "c": "Rarely",
                            "d": "Never",
                            "correctAns": "a"
                            }
                        }
                    ]

    const [currIndex, setCurrIndex] = useState(0);
    const [res, setRes] = useState(0);

    const checkAns = (e) => {
        if(e.target.id === 'a')
            setRes(res + 1);
        else if(e.target.id === 'b')
            setRes(res + 0.75);
        else if(e.target.id === 'c')
            setRes(res + 0.5);
        setCurrIndex(currIndex+1);
    }

    return (
        <div className={`${styles.wholeCont}`}>
            <DashboardLeftNavBar />
            <h3 className={styles.pageTitle}>Psychology Assessment</h3>
            {currIndex < 15
              ?
                <div className={styles.QuizCont}>
                    <div className={styles.questionCont}>
                        <p className={styles.questionNumber}>Q{currIndex+1})</p>
                        <p className={styles.question}>{questions[currIndex].question}</p>
                    </div>
                    <ol className={styles.optionsCont}>
                        <li className={styles.eachOption} id='a'
                            onClick={e=>checkAns(e)}
                        >{questions[currIndex].options.a}</li>
                        <li className={styles.eachOption} id='b'
                            onClick={e=>checkAns(e)}
                        >{questions[currIndex].options.b}</li>
                        <li className={styles.eachOption} id='c'
                            onClick={e=>checkAns(e)}
                        >{questions[currIndex].options.c}</li>
                        <li className={styles.eachOption} id='d'
                            onClick={e=>checkAns(e)}
                        >{questions[currIndex].options.d}</li>
                    </ol>
                </div>
              :
                <div className={styles.resultCont}>

                    <div className={`${styles.colorCont} ${res > 12 ? styles.red : res  >= 9 ? styles.orange : res > 5 ? styles.yellow : styles.green}`}>
                        {/* <p className={styles.res}>{res}</p> */}
                        <p className={`${styles.result}`}>{
                        res >=13 ? 'Therapy needed' : res  >= 11 ? 'Counseling needed' : res > 6 ? 'You are doing great!' : 'Excellent mental health'
                    }</p>
                    </div>
                    
                </div>
            }
        </div>
    )
}