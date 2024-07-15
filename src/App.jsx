
import Home from "./Components/Pages/Home/Home"
import Video from "./Components/Pages/Video/Video"

import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
        
      </Routes>
    </>
  )
}

export default App
