import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Chat from './components/pages/Chat.jsx'
function App() {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <Chat />
    </div>
  )
}

export default App
