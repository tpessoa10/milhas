interface OutputProps{
    text:any
    resultado: number
}

export default function Output({text, resultado}:OutputProps){
    return (
        <div>
            <p>{text}: <span>R$ {resultado.toFixed(2).replace(".",",")}</span></p>
        </div>
    )
}