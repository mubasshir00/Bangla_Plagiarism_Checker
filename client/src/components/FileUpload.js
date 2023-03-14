import axios from 'axios';
import React, { useState } from 'react'
import { base_url } from '../common/base_url';

const FileUpload = () => {
  const [file,setFile] = useState();
  const [fileName,setFileName] = useState("");
  const saveFile = (e) =>{
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }
  const uploadFile = async ()=>{
    const formData = new FormData();
    formData.append("file",file);
    formData.append("fileName",fileName);
    console.log({file});
    console.log({fileName});
    console.log({formData});
    try{
        const res = await axios.post(`${base_url}/fileupload`, formData).then((res)=>{
            console.log({res});
        });
        console.log({res});
    } catch(e){
        console.log({e});
    }
  }
  return (
    <div>
        <input type="file" onChange={saveFile}/>
        <button onClick={uploadFile}>Upload</button>
    </div>
  )
}

export default FileUpload