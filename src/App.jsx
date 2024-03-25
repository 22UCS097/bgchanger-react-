import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [clr ,setClr]=useState("blue");

  return (
    <>
    <div className='main  h-screen w-full  ' style={{backgroundColor:clr}}>
      <div className='flex gap-2 p bg-gold-100 pt-20 justify-center'>
        <button onClick={()=>setClr("red")} className='bg-red-400 text-white rounded-lg w-12  border-2 border-zink-700 '>red</button>
        <button  onClick={()=>setClr("blue")} className='bg-blue-400 text-white rounded w-12 border-2 border-zink-700'>blue</button>
        <button  onClick={()=>setClr("green")} className='bg-green-400 text-white rounded w-12 border-2 border-zink-700 '>green</button>
        <button onClick={()=>setClr("gray")} className='bg-gray-400 text-white rounded w-12 border-2 border-gray-700'>gray</button>
        <button onClick={()=>setClr("black")} className='bg-black-400 text-white rounded w-12 border-2 border-zink-700'>black</button>
        <button onClick={()=>setClr("pink")}  className='bg-pink-500 text-white rounded w-12 border-2 border-zink-700'>pink</button>
      </div>
      
    </div>
    
      
    </>
  )
}

export default App
