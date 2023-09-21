interface OutputProps{
    text:any
    resultado: number
}

export default function Output({text, resultado}:OutputProps){
    return (
        <div>
            <p>{text}: <span>{resultado}</span></p>
        </div>
    )
}