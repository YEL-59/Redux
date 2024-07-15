import Footer from "./Components/Footer/Footer"
import VideoGrid from "./Components/Grid/VideoGrid"
import Navbar from "./Components/Navbar/Navbar"
import Video from "./Components/Pages/Video/Video"
import Tags from "./Components/Tags/Tags"
import Pagination from "./Components/ui/Pagination/Pagination"

function App() {
  

  return (
    <>
     <Navbar/>
     <Tags/>
     <VideoGrid/>
     <Pagination/>
     <Footer/>
     <Video/>
    </>
  )
}

export default App
