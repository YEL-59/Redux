import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import Player from "../../Player/Player";
import RelatedVideoList from "../../RelatedVideoList/RelatedVideoList";
import VideoDescription from "../../VideoDescription/VideoDescription";

const Video = () => {
  return (
    <>
      <Navbar />

      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />
              <VideoDescription />
             
            </div>
            <RelatedVideoList />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Video;
