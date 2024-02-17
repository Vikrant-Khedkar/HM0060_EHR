import { useState } from "react";
import styles from './styles.module.css';
import routes from '../../../utils/routes';
import axios from "axios";
import { useRouter } from "next/router";
import upload from "../../pages/upload";

export default function UploadComponent () {

    const uploadURL = `${routes.baseUrl}${routes.api.upload}`;

    const router = useRouter();

    const [uploaded, setUploaded] = useState();
    const [url , setUrl] = useState();
    const [fileName, setFileName] = useState("Demo");
    const [fileHash , setFileHash] = useState();

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    
  const uploadSingleHandler = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

    
      axios.post(uploadURL, formData)
        .then((response) => {
          console.log('File uploaded successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }}
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        axios.post(uploadURL, formData)
          .then((response) => {
            console.log('File uploaded successfully:', response.data);
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
          });
          
      }}    
  
 

    return (
        <div className={styles.wholeCont} onDrop={e => uploadHandler(e)} >
            <form onSubmit={handleFormSubmit}>
            <label className={styles.uploadCont} onChange={e => uploadSingleHandler(e)} >
            <input type="file" onChange={handleFileChange}  className={styles.input}/>
                <img className = {styles.uploadImg} src='/uploadIcon.png' />
                <p className={styles.dropText}>Drag & Drop</p>
                <p className={styles.dropText}>OR</p>
                <div className={styles.uploadBtn}>Browse</div>
            </label>
            </form>
            {/* <div className={styles.filesShowCont}>
            {
                uploaded?.map((eachFile) => {
                    return (
                        <div key={eachFile} className={styles.eachFile}>
                            <div className={styles.fileTypeCont}>
                                <p className={styles.fileType}>{`${eachFile.type.substring(eachFile.type.lastIndexOf('.')+1)}`}</p>
                            </div>
                            <div className={styles.fileNameCont}>
                                <p className={styles.fileName}>{eachFile.name}</p>
                                <p className={styles.fileSize}>{eachFile.size}</p>
                            </div>
                            <img src='crossIcon.png' className={styles.crossIcon} onClick={e => {e.stopPropagation(),removeHandler(eachFile)}} />
                        </div>
                    )
                })
            }
            </div> */}
            {/* <div className = {styles.uploadBtn2}>Upload Files</div> */}
        </div>
    )
}