import axios from 'axios';
import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './App.css'
import { base_url } from './common/base_url';
import DetailsView from './components/DetailsView';
import FileUpload from './components/FileUpload';
import ShowView from './components/ShowView';
const App = () => {
  const [article, setArticle] = useState("");
  const [arr_of_pie,setArrOfPie] = useState([]);
  const [details_view, setDetailsView] = useState([]);

  const textChange = (e) =>{
    setArticle(e);
  }

  const onClickButton = async () =>{
    console.log({article});
    await axios
      .post(`${base_url}/post-article`, {
        article: article,
      })
      .then(res => {
        console.log(res.data);
        setDetailsView(res.data.result);
       setArrOfPie(res.data.result.map((i)=>{
        return {
          label: i.article.slice(0, 10),
          value: i.similarity_percentage,
        };
       }));
      });
  }
  // console.log({ arr_of_pie });

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
   
    try{
        const res = await axios.post(`${base_url}/fileupload`, formData).then((res)=>{
            console.log({res});
            setDetailsView(res.data.result);
            setArrOfPie(
              res.data.result.map(i => {
                return {
                  label: i.article.slice(0, 10),
                  value: i.similarity_percentage,
                };
              })
            );
        });
       
    } catch(e){
        console.log({e});
    }
  }
  
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <textarea
          onChange={e => textChange(e.target.value)}
          placeholder=""
          style={{ width: '60%', height: '20vh' }}
        ></textarea>
        <div>
          <input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
        </div>
        <button onClick={() => onClickButton()} className="btn third">
          Check
        </button>
        {arr_of_pie.length > 0 ? <ShowView arr_of_pie={arr_of_pie} /> : ''}
        {arr_of_pie.length > 0 ? (
          <DetailsView details_view={details_view} />
        ) : (
          ''
        )}
      </div>
    );
}

export default App