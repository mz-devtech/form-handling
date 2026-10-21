import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm'
import { MultiInputForm } from './components/MultiInputForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SimpleForm /> */}
      <MultiInputForm/>
    </>
  )
}

export default App
