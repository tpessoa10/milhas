
import styled from 'styled-components'
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import Input from './components/Input'
import Checkbox from './components/Checkbox'
import Output from './components/Output'

interface PropsCustomizadas{
  cor:string
}

const SpanEstilizado = styled.span<PropsCustomizadas>`
  color:${({cor}) => cor}
`

function App() {

  const [valorMilha, setValorMilha] = useState<number >(0)
  const [valorDesconto, setValorDesconto] = useState(0)
  const [valorBonus, setValorBonus] = useState(0)
  const [valorComDesconto, setValorComDesconto] = useState<number>(0)
  const [precoMilheiroEfetivo, setPrecoMilheiroEfetivo] = useState<number>(0)
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [exibirResultado, setExibirResultado] = useState(false)

  const handleCalcular = () => {
    let bonus = +valorBonus
    let desconto = +valorDesconto
    if(checkboxValue == true){
      bonus += 30
      desconto +=5
    }
    console.log(bonus)
    console.log(desconto)
    const porcentagemParaInt = desconto * 0.01
    const valorDoDesconto = valorMilha * porcentagemParaInt
    const valorComDesconto = valorMilha - valorDoDesconto
    const precoMilheiroEfetivo = valorComDesconto / (bonus * 0.01 +1)
    setValorComDesconto(valorComDesconto)
    setPrecoMilheiroEfetivo(precoMilheiroEfetivo)
    setExibirResultado(true)
  }

  

  return (
  
    <>
    <Header/>
    <div className='div-principal'>
      <Input tipo='number' nome='Valor do milheiro' onChange={setValorMilha}/>
      <Input tipo='number' nome='Valor do desconto' onChange={setValorDesconto}/>
      <Input tipo='number' nome='Valor do bônus' onChange={setValorBonus}/>
      <Checkbox onChange={(e) => setCheckboxValue(e.target.checked)}/>
      {checkboxValue && 
        <p>Assinantes Clube recebem mais 5% de desconto e 30% de bonus</p>
      }
      <Button onClick={handleCalcular}/>
      {exibirResultado && <div>
        <Output text="Valor com desconto" resultado={valorComDesconto}/>
        <Output text="Preço milheiro" resultado={precoMilheiroEfetivo}/>{
          precoMilheiroEfetivo <= 15.40 &&
          <p>Compra <SpanEstilizado cor="green">Excelente</SpanEstilizado> </p>
        }
        {
          precoMilheiroEfetivo >= 15.40 && precoMilheiroEfetivo <= 17.50 &&
          <p>Compra <SpanEstilizado cor="blue">Boa</SpanEstilizado> </p>
        }
        {
          precoMilheiroEfetivo > 17.50 &&
          <p>Compra <SpanEstilizado cor='red'>Ruim</SpanEstilizado></p>
        }
      </div>
      }
  </div>
</>
  )
}

export default App
