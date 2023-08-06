import { useEffect, useState } from "react";
import styles from './Cep.module.css';

export function Cep() {
    const [endereco, setEndereco] = useState({});
    const meuCep = "88034001"

    useEffect(() => {
        fetch(`http://viacep.com.br/ws/${meuCep}/json/`)
        .then((response) => response.json())
        .then((object) => {
            setEndereco(object);
            console.log("O endereço foi setado");
        });
    }, [])

    return(
        <div className={styles.cep}>
            <h1>Endereço completo</h1>
            <p>Logradouro: {endereco.logradouro}</p>
            <p>Complemento: {endereco.complemento}</p> 
            <p>Bairro: {endereco.bairro}</p> 
            <p>Cidade/UF: {endereco.localidade}/{endereco.uf}</p>     
        
        </div>
    )
}