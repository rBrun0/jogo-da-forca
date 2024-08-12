import { useState } from 'react'
import './App.css'
import BaseForca from './components/baseForca/BaseForca'
import Cabeca from './components/cabeca/Cabeca'
import CorpoDoBoneco from './components/corpo/CorpoDoBoneco'
import Haste from './components/haste/Haste'
import TetoDaForca from './components/tetoForca/TetoDaForca'
import BracoEsquerdo from './components/bracoEsquerdo/BracoEsquerdo'
import BracoDireito from './components/bracoDireito/BracoDireito'
import PernaEsquerda from './components/pernaEsquerda/PernaEsquerda'
import PernaDireita from './components/pernaDireita/PernaDireita'

function App() {
  const [erros, setErros] = useState(0)

  const [inputValue, setInputValue] = useState('')
  const [letrasUsadas, setLetrasUsadas] = useState([''])

  function handleWord(){
    if(inputValue){
      if(letrasUsadas.includes(inputValue)){
        alert('letra ja digitada!')
        return
      }

      if(erros >= 6){
        alert('fim de jogo!')
        return
      }

      if(!palavra.includes(inputValue)){
        alert('letra errada!')
        setErros(erros + 1)
      }
      setLetrasUsadas([...letrasUsadas, inputValue])

      setInputValue('')
    }
  }

  const palavra = "cachorro"

  return (
    <>
    <div>
       <h1 className='gameTitle'>JOGO DA FORCA</h1>

       <Cabeca visivel={erros >= 1}/>
       <CorpoDoBoneco visivel={erros >= 2}/>
       <BracoEsquerdo visivel={erros >= 3}/>
       <BracoDireito visivel={erros >= 4}/>
       <PernaEsquerda visivel={erros >= 5}/>
       <PernaDireita visivel={erros >= 6}/>

       <TetoDaForca/>
       <Haste/>
       <BaseForca/>

       <div className='containerDoInput'>
         <input type='text' className='inputDoJogo' max={1} maxLength={1} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
         <button className='botaoDoJogo' onClick={handleWord}>JOGAR</button>
       </div>
    </div>

    <div className='listaDeLetrasUsadas'>
      {letrasUsadas.join('')}
    </div>

    <div className='palavraDoJogo' style={{display:'flex'}}>
      {
        palavra.split('').map((letra) => (
          <div style={{padding: '10px',display:'flex', flexDirection:'column', alignItems:'center', fontSize:'40px'}}>
          <span style={{opacity:`${letrasUsadas.includes(letra) ? "1" : "0"}`}}>{letra}</span>
          <span style={{width:'40px', height: '10px', backgroundColor:'white'}}></span>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
