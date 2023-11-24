import styles from './cardIntegrantes.module.css'

export default function CardIntegrante(props : any){
    return(
        <div className={styles.card_integrante}>
                            <p>{props.nome}</p>
                            <p>{props.funcao}</p>
                            <p>{props.rm}</p>
                            <p>1TDSPX</p>
                        </div>
    )
}