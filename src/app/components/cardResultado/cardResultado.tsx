import styles from './cardResultado.module.css'

export default function CardResultado(props : any) {
    return (
        <article className={styles.fundo_card}>
            <div className={styles.grid_card}>
                <div className={styles.img_user}></div>
                <p><b>nome: </b>{props.nome}</p>
                <p><b>resultado:</b> {props.resultado}</p>
                <p><b>historico:</b> {props.historico}</p>
                <p><b>cidade:</b> {props.cidade}</p>
                <p><b>resultado:</b> {props.idade}</p>
            </div>
        </article>
    )
}