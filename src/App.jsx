import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
function App() {
  const [sidebar , Setsidebar] = useState(true);

  return (
    <>
     <Navbar setsidebar = {Setsidebar}/>
     <Routes>
     <Route path="/" element={<Home sidebar={sidebar} />} />
     <Route path="/video/:categoryId/:videoId" element={<Video />} />
     </Routes>
    </>
  )
}

export default App
