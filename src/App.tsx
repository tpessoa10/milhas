

import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './components/Header'
import Input from './components/Input'
import Output from './components/Output'

function App() {

  const [valorMilha, setValorMilha] = useState<number >(0)
  const [valorDesconto, setValorDesconto] = useState<number >(0)
  const [valorBonus, setValorBonus] = useState<number>(0)
  const [valorComDesconto, setValorComDesconto] = useState<number>(0)
  const [precoMilheiroEfetivo, setPrecoMilheiroEfetivo] = useState<number>(0)

  const handleCalcular = () => {
    const porcentagemParaInt = valorDesconto * 0.01
    const valorDoDesconto = valorMilha * porcentagemParaInt
    const valorComDesconto = valorMilha - valorDoDesconto
    const precoMilheiroEfetivo = valorComDesconto / (valorBonus * 0.01)
    setValorComDesconto(valorComDesconto)
    setPrecoMilheiroEfetivo(precoMilheiroEfetivo)
  }
 

  

  return (
  <>
    <Header/>
    <Input tipo='number' nome='Valor do milheiro' onChange={setValorMilha}/>
    <Input tipo='number' nome='Valor do desconto' onChange={setValorDesconto}/>
    <Input tipo='number' nome='Valor do bônus' onChange={setValorBonus}/>
    <Button onClick={handleCalcular}/>
    <p>valor com desconto: {valorComDesconto}</p>
    <p>preco milheiro: {precoMilheiroEfetivo}</p>
  </>
  )
}

export default App
