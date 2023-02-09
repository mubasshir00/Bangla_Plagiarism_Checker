import axios from 'axios';
import React, { useState } from 'react'
import './App.css'
import { base_url } from './common/base_url';
const App = () => {
  const [article, setArticle] = useState("");

  const textChange = (e) =>{
    setArticle(e);
  }

  const onClickButton = async () =>{
    console.log({article});
    await axios.post(`${base_url}/post-article`).then((res)=>{
      console.log({res});
    });
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
        style={{ width: '60%', height: '40vh' }}
      ></textarea>
      <button onClick={() => onClickButton()} class="btn third">
        Check
      </button>
    </div>
  );
}

export default App