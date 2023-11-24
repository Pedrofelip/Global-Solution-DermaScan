'use client'

import { useEffect, useState } from 'react'
import styles from './resultado.module.css'
import CardResultado from '@/app/components/cardResultado/cardResultado'

export default function Resultado(){

    const[nome, setNome] = useState("")
    const[historico, setHistorico] = useState("")
    const[resultado, setResultado] = useState("")
    const[cidade, setCidade] = useState("")

    useEffect(() => {
        fetch('urlapi', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resposta) => resposta.json())
        .then((data) => { setNome(data) })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch('urlapi', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resposta) => resposta.json())
        .then((data) => { setHistorico(data) })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch('urlapi', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resposta) => resposta.json())
        .then((data) => { setResultado(data) })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch('urlapi', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resposta) => resposta.json())
        .then((data) => { setCidade(data) })
        .catch((err) => console.log(err))
    },[])




    return(
        <main className={styles.main_resultado}>
            <section className={styles.section_resultado}>
                <CardResultado nome={nome} resultado={resultado} historico={historico} cidade={cidade}></CardResultado>
            </section>
        </main>
    )
}