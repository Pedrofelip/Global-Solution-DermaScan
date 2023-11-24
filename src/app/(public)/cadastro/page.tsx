'use client'

import styles from './cadastro.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CadastroPage() {

    const[nome, setNome] = useState("")
    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")
    const[cpf, setCpf] = useState("")


    function cadastrarUsuario() {

        const cadosUsuario = {
            nome_usuario: nome,
            email_usuario: email,
            cpf_usuario: cpf,
            senha_usuario: senha,
        };

        console.log(cadosUsuario)

        fetch('urlapi', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(cadosUsuario)
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                console.log('usuario cadastrado')
            })
            .catch((error) => console.log(error))
    }

    const handleName = (event: any) => {
        setNome(event.target.value)
    }

    const handleEmail = (event: any) => {
        setEmail(event.target.value)
    }
    
    const handlePsw = (event: any) => {
        setSenha(event.target.value)
    }

    const handleCpf = (event: any) => {
        setCpf(event.target.value)
    }

    return (
        <main className={styles.main}>
            <div className={styles.fundo_cadastro}>
                <div className={styles.logo_cabecalho}>
                    <Image
                        src="/logo_sem_fundo.png"
                        alt="Logo da solução Derma Scan com um coração com o nome da solução em baixo"
                        // className={styles.vercelLogo}
                        width={440}
                        height={380}
                        priority
                    />
                </div>
                <div className={styles.grid_form}>
                    <div className={styles.fundo_form}>
                        <form action="" className={styles.form_cadastro}>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">Nome</label>
                                <input type="text" onChange={handleName}/>
                            </div>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">Email</label>
                                <input type="email" onChange={handleEmail}/>
                            </div>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">Senha</label>
                                <input type="password" onChange={handlePsw}/>
                            </div>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">CPF</label>
                                <input type="text" onChange={handleCpf}/>
                            </div>
                            <div className={styles.btn_cadastro}>
                            <p className={styles.redirect}>Já possui uma conta? <Link href="/login" className={styles.link_redirect}>faça o login</Link></p>
                                <button onClick={cadastrarUsuario}>cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}