import axios from 'axios';
import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './App.css'
import { base_url } from './common/base_url';
const App = () => {
  const [article, setArticle] = useState("");

  const textChange = (e) =>{
    setArticle(e);
  }
  let arr_of_pie = []

  const onClickButton = async () =>{
    console.log({article});
    await axios
      .post(`${base_url}/post-article`, {
        article: article,
      })
      .then(res => {
        console.log(res.data.result);
        arr_of_pie = res.data.result;
        
      });
  }
  console.log({ arr_of_pie });
  

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
        style={{ width: '60%', height: '40vh' }}
      ></textarea>
      <button onClick={() => onClickButton()} className="btn third">
        Check
      </button>
      { arr_of_pie.length>0 ? 'A' : 'B'}
      <PieChart style={{ width: '300px', height: '300px' }} data={arr_of_pie} />
    </div>
  );
}

export default App