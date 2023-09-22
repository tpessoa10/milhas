import styles from './Header.module.css'

interface HeaderProps{
    text:string
}

export default function Header ({text}:HeaderProps){
    return (
        <header className={styles.header}>
            <p className={styles.p}>&copy; {text}</p>
        </header>
    )
}