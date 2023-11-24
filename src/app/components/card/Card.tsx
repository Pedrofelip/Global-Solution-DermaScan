import Image from "next/image"
import styles from './card.module.css'

export default function Card(props : any) {
    return (
        <article className={styles.fundo_card}>
            <div className={styles.grid_card}>
            <Image
                        src={props.img}
                        alt="Logo da solução Derma Scan com um coração com o nome da solução em baixo"
                        // className={styles.vercelLogo}
                        width={230}
                        height={190}
                        priority
                    />
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>
        </article>
    )
}