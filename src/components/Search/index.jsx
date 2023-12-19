import { useState } from "react";
import styles from "./Search.module.css";
import gitlogo from '../../assets/icone-github-noir.png'

const Search = ({ nomeUsuario, onChangeContent }) => {
    const [content, setContent] = useState('');

    function changeContent(e) {
        const inputContent = e.target.value

        setContent(inputContent)
    }

    function handleChangeContent() {
        if (content.length === 0) {
            alert('Por favor, preencha o campo de usuário.');
        } else {
            fetch(`https://api.github.com/users/${content}/repos`)
                .then(res => {
                    if (res.status === 404) {
                        alert('Usuário não encontrado.');
                    } else {
                        onChangeContent(content);
                    }
                })
                .catch(erro => {
                    alert('Ocorreu um erro ao buscar o usuário do Github fornecido, tente novamente mais tarde.');
                });
        }
    }

    return (
        <div className={nomeUsuario ? styles.formComUsuario : styles.formSemUsuario}>
            <img className={styles.logo} src={gitlogo} alt="Logo Github" />
            <h1>Repositórios GitHub</h1>
            <div>
                <input type="text" placeholder="Escreva seu Github" onChange={changeContent}/>
                <button onClick={handleChangeContent} type="button">Pesquisar</button>
            </div>
        </div>
)}

export default Search;