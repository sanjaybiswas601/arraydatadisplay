import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';

function App() {
  const [data,setData] = useState([
    {id:1,username:"sanjay1"},
    {id:2,username:"sanjay2"},
    {id:3,username:"sanjay3"},
    {id:4,username:"sanjay4"},
    {id:5,username:"sanjay5"}
  ])

  const handlelevel = (id)=>{
    const newData = data.filter(data=>data.id!==id)
    setData(newData)
  }
  return (
    <>
    <h1>hi everybody</h1>
      {
        data.map((data) =>
          <div>{data.username}<button onClick={() => handlelevel(data.id)}>delete</button></div>
        )
      }
    </>
  );
}

export default App;
