import Footer from "../../Footer/Footer";
import VideoGrid from "../../Grid/VideoGrid";
import Navbar from "../../Navbar/Navbar";
import Tags from "../../Tags/Tags";
import Pagination from "../../ui/Pagination/Pagination";

const Home = () => {
  return (
    <>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
