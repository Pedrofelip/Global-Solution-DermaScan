'use client';

import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.fundo_cabecalho}>
            <div className={styles.grid_cabecalho}>
                <Image
                    src="/logo_sem_fundo.png"
                    alt="Logo da solução Derma Scan com um coração com o nome da solução em baixo"
                    // className={styles.vercelLogo}
                    width={250}
                    height={210}
                    priority
                />
                <nav className={styles.grid_Links}>
                    <Link href="/" className={styles.Links}>home</Link>
                    <Link href="/consulta" className={styles.Links}>consulta</Link>
                    <Link href="/resultado" className={styles.Links}>resultados</Link>
                    <Link href="/login" className={styles.Links}>login</Link>
                    <Link href="/cadastro" className={styles.Links}>cadastro</Link>
                </nav>
            </div>
        </header>
    )
}