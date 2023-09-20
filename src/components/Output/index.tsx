interface OutputProps{
    text:any
}

export default function Output({text}:OutputProps){
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}