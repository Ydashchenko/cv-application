//import { useState } from 'react'
import './App.css'
import { GeneralInfoConstructor } from './components/general-info'
import { EducationConstructor } from './components/education'

function App() {

  return (
    <>
      <div className='constructor'>
        <h1>CV Constructor</h1>
        <GeneralInfoConstructor />
        <EducationConstructor />
      </div>
      <div className='cv'>

      </div>
    </>
  )
}

export default App
