import { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ nomeUsuario, onChangeContent }) => {
    const [content, setContent] = useState('');

    function changeContent(e) {
        const inputContent = e.target.value

        setContent(inputContent)
    }
    
    function handleChangeContent() {
        onChangeContent(content)
    }

    return (
        <div className={nomeUsuario ? styles.formComUsuario : styles.formSemUsuario}>
            <img className={styles.logo} src="../src/assets/icone-github-noir.png" alt="Logo Github" />
            <h1>Repositórios GitHub</h1>
            <div>
                <input type="text" placeholder="Escreva seu Github" onChange={changeContent}/>
                <button onClick={handleChangeContent} type="button">Pesquisar</button>
            </div>
        </div>
)}

export default Search;