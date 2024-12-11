import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './First'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Second from './Second'
import Third from './Third'
import Todolist from './Todolist'
import Todolist2 from './Todolist2'




function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First/>}/>
          <Route path="/second" element={<Second/>}/>
          <Route path="/third" element={<Third/>}/>
          <Route path = "/Todolist" element={<Todolist/>}/>
           <Route path = "/Todolist2" element={<Todolist2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
