'use client';

import { useState } from 'react';
import styles from './consulta.module.css'



export default function Consulta() {

    const [condicaoMedica, setCondicaoMedica] = useState("")
    const [medicamentosUtilizados, setMedicamentosUtilizados] = useState("")
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [rua, setRua] = useState("")
    const [bairro, setBairro] = useState("")
    const [uf, setUf] = useState("")
    const [numeroCasa, setNumeroCasa] = useState("")
    const [complementoCasa, setComplementoCasa] = useState("")



    function checkCEP(e: any) {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep)
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEstado(data.localidade)
                setRua(data.logradouro)
                setBairro(data.bairro)
                setUf(data.uf)
            })
    }

    function cadastrarConsulta() {

        const dadosEndereco = {
            cep: cep,
            localidade: estado,
            logradouro: rua,
            bairro: bairro,
            uf: uf,
            numeroCasa: numeroCasa,
            complementoCasa: complementoCasa
        };

        const dadosPerguntas = {
            condMedica: condicaoMedica,
            medUtilizados: medicamentosUtilizados
        }


        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(dadosEndereco)
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                console.log('consulta cadastrada')
            })
            .catch((error) => console.log(error))

        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(dadosPerguntas)
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                console.log('consulta cadastrada')
            })
            .catch((error) => console.log(error))
    }

    const handleCond = (event: any) => {
        setCondicaoMedica(event.target.value)
    }

    const handleMed = (event: any) => {
        setMedicamentosUtilizados(event.target.value)
    }

    const handleCep = (event: any) => {
        setCep(event.target.value)
    }

    const handleNumCasa = (event: any) => {
        setNumeroCasa(event.target.value)
    }

    const handleCompCasa = (event: any) => {
        setComplementoCasa(event.target.value)
    }

    return (
        <main className={styles.main_consulta}>
            <section className={styles.grid_consulta}>
                <div className={styles.fundo_form}>
                    <div className={styles.grid_form}>
                        <div className={styles.titulo_consulta}>
                            <h1>consulta</h1>
                        </div>
                        <form action="" className={styles.form} onSubmit={(e) => { e.preventDefault }}>
                            <div className={styles.grid_inputs}>
                                <div className={styles.input2}>
                                    <label htmlFor="">Sua condição médica:</label>
                                    <input type="text" name='condMedica' onChange={handleCond} />
                                </div>
                                <div className={styles.input2}>
                                    <label htmlFor="">Faz uso de algum medicamento:</label>
                                    <input type="text" name='medUtilizados' onChange={handleMed} />
                                </div>
                            </div>
                            <div className={styles.grid_inputs}>
                                <div className={styles.input}>
                                    <label htmlFor="">CEP</label>
                                    <input type="text" onBlur={checkCEP} maxLength={8} />
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="">Estado</label>
                                    <input type="text" name='estado' id='estado' value={estado} />
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="">UF</label>
                                    <input type="text" name='uf' id='uf' value={uf} />
                                </div>

                            </div>
                            <div className={styles.grid_inputs}>
                                <div className={styles.input2}>
                                    <label htmlFor="">Bairro</label>
                                    <input type="text" name='bairro' id='bairro' value={bairro} />
                                </div>
                                <div className={styles.input2}>
                                    <label htmlFor="">Rua</label>
                                    <input type="text" name='rua' id='rua' value={rua} />
                                </div>
                            </div>
                            <div className={styles.grid_inputs}>
                                <div className={styles.input2}>
                                    <label htmlFor="">Numero</label>
                                    <input type="text" name='bairro' id='bairro' onChange={handleNumCasa} />
                                </div>
                                <div className={styles.input2}>
                                    <label htmlFor="">Complemento</label>
                                    <input type="text" name='rua' id='rua' onChange={handleCompCasa} />
                                </div>
                            </div>
                            <button className={styles.btn} onClick={cadastrarConsulta}>Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}