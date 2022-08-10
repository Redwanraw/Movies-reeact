import React, { useState } from 'react';
import './App.css';
import Register from './Componet/Register';
import Login from './Componet/Login';
import {  Route ,Routes } from 'react-router-dom';
import Api from "./Componet/Api"
import Romantic from "./Componet/Romantic";
import Drama from "./Componet/Drama"
import Comedy from "./Componet/Comedy"
import Action  from "./Componet/Action";
import Head from "./Componet/head";
import Vid from "./Componet/Vid";
function App() {

{/*const areyy=[
  {name:"redwan",age:'25', img:jsimg },
  {name:"ragb",age:'30' ,img:jsimg},
  {name:"mohmd",age:'40', img:jsimg},
]
  const areyy2 = areyy.map((elem , i)=>{
    return <Abut obj={elem} key={i} />
  });
{/*
  const areyy3 = areyy.map((elem , i)=>{

  return <Lickcount obj={elem} key={i}/>
  });
  /*\
  \\
  const  Getdata=() =>{
  console.log("get")
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(response => {
    console.log("respons",response)
console.log("GETDATA",response.data)  
})
.catch((err)=>{
  console.log("err",err)
});
}
export  function disblock()
  {//اظهار الفيديو
    document.getElementById("change").style.display = "block"; 
}*/
}

const [user, setuser] = useState({email:'1234' , password:'1234' , user:'redwan'})


const [ isonChange,setonChange]=useState("a")

function linkbt(linkbt){

setonChange( linkbt )

}

const [ isserver,setserver]=useState("a")

function server(linkbt){

setserver( linkbt )

}

const [ isserver1,setserver1]=useState("a")

function server1(linkbt){

setserver1( linkbt )

}

const [ isserver2,setserver2]=useState("a")

function server2(linkbt){

setserver2( linkbt )

}

const [ isserver3,setserver3]=useState("a")

function server3(linkbt){

setserver3( linkbt )

}
const [ isserver4,setserver4]=useState("a")

function server4(linkbt){

setserver4( linkbt )

}
const [ isbutton,setbutton]=useState("        <button type='button' class='m-1 btn btn-outline-secondary font' onClick={()=>{props.vid1(btn) playVid()}}>حلقة 2</button>")

function server4(linkbt){

setbutton( linkbt )

}



  return (
    <div className="App">

      <Routes>
        <Route path='/' element = {<Register userInfo={user}  />}/>
        <Route path='/Login' element={  <Login userInfo={user} /> }/>
        <Route  path='/Api' element={  <Api/>}/>
        <Route  path='/Romantic' element={  <Romantic/>}/>
        <Route  path='/Drama' element={  <Drama vid1={linkbt}  server={server} server1={server1} server2={server2} server3={server3} server4={server4} />}/>
        <Route  path='/Vid' element={  <Vid path="=?/" vid1={linkbt} vid={isonChange} server={isserver} server1={isserver1} server2={isserver2} server3={isserver3} server4={isserver4}></Vid>}/>
        <Route  path='/Comedy' element={  <Comedy/>}/>
        <Route  path='/Action' element={  <Action/>}/>
        <Route  path='/Hider' element={  <Head/>}/>

      </Routes>

      {/*
<Abut  name="redwan" pothsn="scrept" obj={{age:20,lack:50}}/>
<Abut name="ragb" pothsn="full" obj={{age:30,lack:60}} />
<Abut name="mohmd" pothsn="strac" obj={{age:40,lack:70}}/>
      */}

</div>
  );
}

export default App;
