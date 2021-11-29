import React, {useState, useEffect} from 'react';
import Home from "./components/Home"
import Logueo from "./components/Logueo"
//https://www.youtube.com/watch?v=PGPiefJK8LU&t=1s
// 09:32

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  return <>
      {
        usuarioGlobal ? <Home /> : <Logueo />
      } 
      </>
  
}

export default App;
