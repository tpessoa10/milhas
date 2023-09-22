import styles from './Button.module.css'

interface ButtonProps{
    onClick: () => void
}

export default function Button({onClick}:ButtonProps){
    return(
        <div className={styles.divBotao}>
            <button className={styles.botao} onClick={onClick}>Calcular</button>
        </div>
    )
}