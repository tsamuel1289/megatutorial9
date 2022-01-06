import React, {useState, useEffect} from 'react';
import Home from "./components/Home"
import Logueo from "./components/Logueo"
import 'bootstrap/dist/css/bootstrap.min.css'

import firebaseApp from './credentials'
import {getAuth, onAuthStateChanged} from "firebase/auth"
const auth = getAuth(firebaseApp)


//https://www.youtube.com/watch?v=PGPiefJK8LU&t=1s
// 24:00

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  return <>
      {
        usuarioGlobal ? <Home /> : <Logueo />
      } 
      </>
  
}

export default App;
