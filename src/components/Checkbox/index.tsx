import { ChangeEvent } from "react"
import styles from './Checkbox.module.css'
interface CheckboxProps{
    onChange:(event:ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({onChange}:CheckboxProps){
    return(
        <div className={styles.checkbox}>
            <input type="checkbox" onChange={onChange} className={styles.input}/>
            <label htmlFor="">Assinante Clube</label>
        </div>
    )
}