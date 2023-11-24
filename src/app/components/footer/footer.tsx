import styles from './footer.module.css'
import Image from 'next/image'
import Card from '../cardIntegrante/cardIntegrante'

export default function Footer() {
    return (
        <footer className={styles.fundo_rodape}>
            <div className={styles.grid_rodape}>
                <div className={styles.lista_participantes}>
                    <h3>participantes:</h3>
                    <div className={styles.lista_cards}>
                        <Card nome ='Pedro Felipe' funcao ='Front-end' rm='RM98093'></Card>
                        <Card nome ='Igor Miguel' funcao ='Inteligencia Artificial' rm='RM99495'></Card>
                        <Card nome ='João Pedro' funcao ='TX & BD' rm='RM98442'></Card>
                        <Card nome ='Gustavo René' funcao ='JAVA - Back-end' rm='RM551288'></Card>
                        <Card nome ='Kaue Matheus' funcao ='Python' rm='RM551732'></Card>
                    </div>
                </div>
                <div>
                    <Image
                        src="/logo_sem_fundo.png"
                        alt="Logo da solução Derma Scan com um coração com o nome da solução em baixo"
                        // className={styles.vercelLogo}
                        width={230}
                        height={190}
                        priority
                    />
                    {/* <p>turma: 1TDSPX</p> */}
                </div>
            </div>
        </footer>
    )
}