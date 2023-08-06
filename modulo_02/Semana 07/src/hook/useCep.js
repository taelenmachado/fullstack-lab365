import { useEffect, useState } from "react";

export function useCep() {

    const [cep, setCep] = useState('');
    const [status, setStatus] = useState({
        loading: true,
        error: {},
        data: {}
    });

    useEffect(() => {
        //Habilita loading
        setStatus({
            loading: true,
            error: {},
            data: {}
        })

        //Nosso fetch
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => {

                //Desabilita loading e retorna o endereço
                setStatus({
                    loading: false,
                    error: {},
                    data
                })

            }).catch(error => {
                //Desabilita loading e retorna o erro
                setStatus({
                    loading: false,
                    error,
                    data: {}
                })
            })
    }, [cep]);

    return [status, setCep];
}