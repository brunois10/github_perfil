import { useState } from "react";

import Search from "./components/Search";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  

  function onChangeContent(content) {
    setNomeUsuario(content)
  }
  
  return (
    <>
      <Search nomeUsuario={nomeUsuario} onChangeContent={onChangeContent}/>
      {nomeUsuario.length >= 1 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
