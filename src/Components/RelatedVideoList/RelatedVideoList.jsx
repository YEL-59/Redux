import SingelVideoList from "../SingleRelatedVideoListItem/SingelVideoList";

const RelatedVideoList = () => {
  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <SingelVideoList/>
      </div>
    </>
  );
};

export default RelatedVideoList;
