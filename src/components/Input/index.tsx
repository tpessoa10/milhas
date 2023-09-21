import styles from './Input.module.css'

interface InputProps{
    tipo: string
    nome: string
    onChange: (value: number) => void

}

export default function Input({tipo, nome, onChange}:InputProps){
    return (
        <form className={styles.form}>
            <label className={styles.label} htmlFor={nome}>{nome}</label>
            <input type={tipo} name={nome} className={styles.input} onChange={(e) => onChange(e.target.value)} />
        </form>
    )
}