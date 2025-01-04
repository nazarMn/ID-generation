import { useState } from 'react'
import './App.css'
import IDgeneration from './components/IDgeneration/IDgeneration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <IDgeneration/>
   
    </>
  )
}

export default App
