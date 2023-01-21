import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Mensaje } from './components/mensaje';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Mensaje mensaje={'Mensaje desde las propiedades de los componentes'}/>
      <Mensaje mensaje={'Mensaje desde el componente mensaje'} />

      {
        for(let i = 0; i < 5; i++){
          console.log('')
        }
      }
    </div>
  )
}

export default App
