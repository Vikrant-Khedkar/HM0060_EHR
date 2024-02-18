import { useEffect, useMemo, useRef, useState } from "react";
import styles from './styles.module.css';
import routes from '../../../utils/routes';
import axios from "axios";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { useSelector } from "react-redux";
import DashboardLeftNavBar from '../DashboardLeftNavBar';
import DashboardTopNavBar from "../DashboardTopNavBar";

export default function NewUploadComponent () {

    const uploadURL = `${routes.baseUrl}${routes.api.upload}`;

    const inputRef = useRef(null);

    const {user_address} = useSelector(store => store.metamaskLogin);

    const [selected, setSelected] = useState('recordName');

    const [uploaded, setUploaded] = useState();
    const [url , setUrl] = useState('https://gateway.pinata.cloud/ipfs/QmRXZZ6a483BgQuTFbxzeYVX76DHQMkMtTkZcwfEV31WBc');
    const [showFile, setShowFile] = useState(false);
    const [fileName, setFileName] = useState('');
    const [fileHash, setFileHash] = useState('');

    const [upload, setUpload] = useState({'recordName' : '',
                                            'date' : '',
                                            'fileName' : '',
                                            'file' : '',
                                            'user_address' : user_address
                                        })

    useEffect(() => {
        inputRef.current.focus();
    },[])

     const uploadSingleHandler = async (e) => {
        const formData = new FormData();
        formData.append('recordName', upload.recordName);
        formData.append('date', upload.date);
        formData.append('fileName', upload.fileName);
        formData.append('file', upload.file);
        formData.append('user_address', upload.user_address);
        await axios.post( uploadURL , formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        })
        .then(resp => {
            setUrl(resp.data.Data[5]);
            setFileName(resp.fileName);
            setFileHash(fileHash);
            setShowFile(true);
        })
        // .then(() => {
        //     if(window !== undefined){
        //         console.log(url);
        //         window.open(url, '_self');
        //     }
        // })
        .catch(err => console.log(err));
    }

    const inputHandler = (e) => {
        const temp = {...upload};
        temp[e.target.name] = e.target.value;
        setUpload(temp);
    }

    const fileHandler = (e) => {
        const temp = {...upload};
        temp.file = e.target.files[0];
        setUpload(temp);
    }

    return (
        <div className={styles.wholeCont} >
            {
            showFile && url && <div className={styles.modalCont} onClick={e => setShowFile(false)}>
                    <iframe src={url} className={styles.modalContent} onClick={e=> e.stopPropagation()}/>
                </div>
            }
            <DashboardLeftNavBar />
            <div className={styles.rightCont} >
                <DashboardTopNavBar pageTitle='Add Records' pageTitleImg='addRecordsIcon'/>
                <div className={styles.rightBottomCont} >
                    <form className={styles.innerForm} >
                        <div className={styles.inputBoxCont} >
                            <div className={styles.redDot} ></div>
                            <p className={styles.inputHeader}>Record Name</p>
                            <label className={styles.inputCont} 
                                onClick={e => {e.stopPropagation(),setSelected('recordName')}}>
                                <p className={`${styles.inputTitle} ${selected === 'recordName'|| upload.recordName != ''  ? styles.inputTitleClicked : ''}`}>Record Name</p>
                                <input className={`${styles.inputBox} ${selected === 'recordName' ? styles.inputBoxClicked : ''}`}
                                    name='recordName'
                                    ref={inputRef}
                                    onChange={(e) => {e.stopPropagation(),inputHandler(e)}}
                                />
                            </label>
                        </div>
                        <div className={styles.inputBoxCont} >
                            <div className={styles.redDot} ></div>
                            <p className={styles.inputHeader}>Date</p>
                            <label className={styles.inputCont}
                                onClick={e => {e.stopPropagation(),setSelected('date')}}>
                                {(selected === 'date' || upload.fileName !== '' ) && <p className={`${styles.inputTitle} ${selected === 'date'|| upload.date != ''  ? styles.inputTitleClicked : ''}`}>Date</p>}
                                <input className={`${styles.inputBox} ${selected === 'date' ? styles.inputBoxClicked : ''}`}
                                    name='date' type = 'date'
                                    onChange={(e) => {e.stopPropagation(),inputHandler(e)}}
                                />
                            </label>
                        </div>
                        <div className={styles.inputBoxCont} >
                            <div className={styles.redDot} ></div>
                            <p className={styles.inputHeader}>File Name</p>
                            <label className={styles.inputCont}
                                onClick={e => {e.stopPropagation(),setSelected('fileName')}}>
                                <p className={`${styles.inputTitle} ${selected === 'fileName'|| upload.fileName != ''  ? styles.inputTitleClicked : ''}`}>File Name</p>
                                <input className={`${styles.inputBox} ${selected === 'fileName' ? styles.inputBoxClicked : ''}`}
                                    name='fileName'
                                    onChange={(e) => {e.stopPropagation(),inputHandler(e)}}
                                />
                            </label>
                        </div>
                        <div className={styles.inputBoxCont} >
                            <div className={styles.redDot} ></div>
                            <p className={styles.inputHeader}>File</p>
                            {upload.file ==='' 
                                ?
                            <label className={styles.fileInputCont}>
                                <img className={styles.uploadImg} src='/uploadImg.png' alt='record upload image' />
                                <input className={styles.uploadInput} 
                                    type='file'
                                    name = 'file'
                                    onChange={e => {e.stopPropagation(),fileHandler(e)}}
                                />
                            </label>
                                :
                            <div className={styles.showFileCont}>
                                <img className={styles.uploadImg} src='/uploadIcon.png' alt='file image' />
                                <p className={styles.inputHeader}>{upload.file.name}</p>
                            </div>}
                        </div>
                        <div className={styles.uploadButton} onClick={uploadSingleHandler}>Upload file</div>
                    </form>
                </div>
            </div>
        </div>
    )
}