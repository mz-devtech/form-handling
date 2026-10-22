import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm'
import { MultiInputForm } from './components/MultiInputForm'
import AdvancedForm from './components/AdvancedForm'
import { UncontrolledForm } from './components/UncontrolledForm'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SimpleForm /> */}
      {/* <MultiInputForm/> */}

      {/* <AdvancedForm /> */}

      {/* <UncontrolledForm /> */}
      <Test />





    </>
  )
}

export default App
