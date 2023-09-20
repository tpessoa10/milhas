interface InputProps{
    tipo: string
    nome: string
    onChange: (value: number) => void

}

export default function Input({tipo, nome, onChange}:InputProps){
    return (
        <form>
            <label htmlFor={nome}>{nome}</label>
            <input type={tipo} name={nome} onChange={(e) => onChange(e.target.value)} />
        </form>
    )
}