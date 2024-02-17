import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
// import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

export default function FormsComponent() {

  const testsRef = useRef();

  const [selected,setSelected] = useState('age');
  const [records , setRecords] = useState({age:'',
                                          dateOfVisit:'',
                                          diagnosis:'',
                                          prescription:'',
                                          testsAdvised:['lessThenZeroAge','setLessThanZeroAge','lessThenZeroAge'],
                                          fees:'',
                                          followUp:'',
                                          bloodPressure:'',
                                          weight:''});
  const [eachTest , setEachTest] = useState('');
  const [testsList , setTestsList] = useState([]);
  const [lessThenZeroAge , setLessThanZeroAge] = useState(false);
  const [lessThenZeroFee , setLessThanZeroFee] = useState(false);
  const [lessThenZeroWeight , setLessThanZeroWeight] = useState(false);

  useEffect(() => {
    const keyDowHandler = e => {
      if(e.key === 'Enter') {
        e.preventDefault();
        
      }
    }
  })

  const inputHandler = (e) => {
    const temp = {...records};
    temp[e.target.name] = e.target.value;
    if(e.target.name === 'age'){
      if( e.target.value > 0) {
        setRecords({...temp});
        setLessThanZeroAge(false);
      }
      else
        setLessThanZeroAge(true);
    }
    else if(e.target.name === 'fees'){
      if( e.target.value > 0) {
        setRecords({...temp});
        setLessThanZeroFee(false);
      }
      else
        setLessThanZeroFee(true);
    }
    else if(e.target.name === 'weight'){
      if( e.target.value > 0) {
        setRecords({...temp});
        setLessThanZeroWeight(false);
      }
      else
        setLessThanZeroWeight(true);
    }
    else 
      setRecords({...temp});
  }

  const updateTestsList = () => {
    const temp = {...records};
    temp.testsAdvised = [...temp.testsAdvised , eachTest];
    setRecords({...temp});
    testsRef.current.value = ''
  }

  const removeTests = (e,i) => {
    const temp = {...records};
    console.log(e.target.name);
    const temp2 = records.testsAdvised.filter((item , index) => {
      return i !== index;
    })
    temp.testsAdvised = [...temp2];
    setRecords(temp);
  }

  return (
    <div className={styles.wholeCont} >
      <label className={`${styles.inputCont} ${selected === 'age'? styles.inputContClicked : ''}`} onClick={e => setSelected('age')}>
        <p className={`${styles.inputTitle} ${selected === 'age'|| records.age != ''  ? styles.inputTitleClicked : ''}`}>Age</p>
        <input className={`${styles.inputBox} ${selected === 'age' ? styles.inputBoxClicked : ''}`}
          type="number"
          name='age'
          onChange={(e) => inputHandler(e)}
        />
      </label>
      {lessThenZeroAge && <p className={styles.errorMsg}>Age cant be less than 0</p>}

      <label className={`${styles.inputCont} ${selected === 'dateOfVisit' ? styles.inputContClicked : ''}`} onClick={e => setSelected('dateOfVisit')}>
        <p className={`${styles.inputTitle} ${selected === 'dateOfVisit'|| records.dateOfVisit != '' ? styles.inputTitleClicked : ''}`}>Date of Visit</p>
        <input className={`${styles.inputBox} ${selected === 'dateOfVisit' ? styles.inputBoxClicked : ''}`}
          type="date"
           name='dateOfVisit'
           style={{color:'black'}}
          onChange={(e) => inputHandler(e)}
        />
      </label>

      <label className={`${styles.inputCont} ${selected === 'diagnosis' ? styles.inputContClicked : ''}`} onClick={e => setSelected('diagnosis')}>
        <p className={`${styles.inputTitle} ${selected === 'diagnosis'|| records.diagnosis != '' ? styles.inputTitleClicked : ''}`}>Diagnosis</p>
        <textarea className={`${styles.textBox} ${selected === 'diagnosis' ? styles.textBoxClicked : ''}`}
          type="text"
          name='diagnosis'
          onChange={(e) => inputHandler(e)}
        />
      </label>

      <label className={`${styles.inputCont} ${selected === 'prescription' ? styles.inputContClicked : ''}`} onClick={e => setSelected('prescription')}>
        <p className={`${styles.inputTitle} ${selected === 'prescription'|| records.prescription != '' ? styles.inputTitleClicked : ''}`}>Prescription</p>
        <input className={`${styles.inputBox} ${selected === 'prescription' ? styles.inputBoxClicked : ''}`}
          type="text"
          name='prescription'
          onChange={(e) => inputHandler(e)}
        />
      </label>

      <div className={styles.testsListCont}>
        <p className={styles.testsTitle}>Advise Tests List</p>
        {
          records.testsAdvised && records.testsAdvised.map((item , index) => {
            return (
              <div key={index} className={styles.eachTestAdvisedCont}>
                <p className={styles.eachTestAdvised}>{item}</p>
                <p className={styles.eachTestAdvisedCross} name={index} onClick={e => removeTests(e,index)}>X</p>
              </div>
            )
          })
        }
        <label className={`${styles.inputCont} ${selected === 'testsAdvised' ? styles.inputContClicked : ''}`} onClick={e => setSelected('testsAdvised')}>
          <p className={`${styles.inputTitle} ${selected === 'testsAdvised'|| records.testsAdvised != '' ? styles.inputTitleClicked : ''}`}>Advise Tests</p>
          <input className={`${styles.inputBox} ${selected === 'testsAdvised' ? styles.inputBoxClicked : ''}`}
            type="text"
            name='testsAdvised'
            ref={testsRef}
            onChange={e => setEachTest(e.target.value)}
          />
          <button className={styles.addButton} name='testsAdvised' onClick={(e) => updateTestsList(e)}>Add</button>
      </label>
      </div>

      <label className={`${styles.inputCont} ${selected === 'fees' ? styles.inputContClicked : ''}`} onClick={e => setSelected('fees')}>
        <p className={`${styles.inputTitle} ${selected === 'fees'|| records.fees != '' ? styles.inputTitleClicked : ''}`}>Fees</p>
        <input className={`${styles.inputBox} ${selected === 'fees' ? styles.inputBoxClicked : ''}`}
          type="number"
          name='fees'
          onChange={(e) => inputHandler(e)}
        />
      </label>
      {lessThenZeroFee && <p className={styles.errorMsg}>Fees cant be less than 0</p>}

      <label className={`${styles.inputCont} ${selected === 'followUp' ? styles.inputContClicked : ''}`} onClick={e => setSelected('followUp')}>
        <p className={`${styles.inputTitle} ${selected === 'followUp'|| records.followUp != '' ? styles.inputTitleClicked : ''}`}>Follow up</p>
        <textarea className={`${styles.textBox} ${selected === 'followUp' ? styles.textBoxClicked : ''}`}
          type="text"
          name='followUp'
          onChange={(e) => inputHandler(e)}
        />
      </label>

      <label className={`${styles.inputCont} ${selected === 'bloodPressure' ? styles.inputContClicked : ''}`} onClick={e => setSelected('bloodPressure')}>
        <p className={`${styles.inputTitle} ${selected === 'bloodPressure'|| records.bloodPressure != '' ? styles.inputTitleClicked : ''}`}>Blood Pressure</p>
        <input className={`${styles.inputBox} ${selected === 'bloodPressure' ? styles.inputBoxClicked : ''}`}
          type="text"
          name='bloodPressure'
          onChange={(e) => inputHandler(e)}
        />
      </label>

      <label className={`${styles.inputCont} ${selected === 'weight' ? styles.inputContClicked : ''}`} onClick={e => setSelected('weight')}>
        <p className={`${styles.inputTitle} ${selected === 'weight'|| records.weight != '' ? styles.inputTitleClicked : ''}`}>Weight</p>
        <input className={`${styles.inputBox} ${selected === 'weight' ? styles.inputBoxClicked : ''}`}
          type="number"
          name='weight'
          onChange={(e) => inputHandler(e)}
        />
      </label>
      {lessThenZeroWeight && <p className={styles.errorMsg}>Weight cant be less than 0</p>}

      <button type="submit">Submit</button>
    </div>
)}