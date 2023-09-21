import { ChangeEvent } from "react"

interface CheckboxProps{
    onChange:(event:ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox({onChange}:CheckboxProps){
    return(
        <div>
            <input type="checkbox" onChange={onChange}/>
            <label htmlFor="">Assinante Clube</label>
        </div>
    )
}