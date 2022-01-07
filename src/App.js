import React, {useState} from 'react';
import Home from "./components/Home"
import Logueo from "./components/Logueo"
import 'bootstrap/dist/css/bootstrap.min.css'

import firebaseApp from './credentials'
import {getAuth, onAuthStateChanged} from "firebase/auth"
const auth = getAuth(firebaseApp)
console.log(auth)

//https://www.youtube.com/watch?v=PGPiefJK8LU&t=1s
// 28:00

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {
    //console.log(usuarioFirebase)
    if (usuarioFirebase){
      // codigo en caso de que haya sesion iniciada
      setUsuarioGlobal(usuarioFirebase)
    }else{
      // codigo en caso de que no haya sesion iniciada
      setUsuarioGlobal(null)
      
    }
  })



  return <>
      {
        usuarioGlobal ? <Home /> : <Logueo />
      } 
      </>
  
}

export default App;
