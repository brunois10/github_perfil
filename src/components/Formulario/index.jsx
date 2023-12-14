import { useState, useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, setNome ] = useState('');

    //mount é montado
    //update atualizado
    //onmount desmontado Funciona com atributo tb

    useEffect(() => {
        console.log("O componente inicou")

        return () => {
            console.log('o componente finzalizou')
        }
    }, [])

    useEffect(() => {
        console.log("O estado mudou")
    }, [nome])

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
            <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }


//Utilizando o encapsulamento com <>
    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" name="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B"onChange={({ target }) => setMateriaB(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria C"onChange={({ target }) => setMateriaC(parseInt(target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;