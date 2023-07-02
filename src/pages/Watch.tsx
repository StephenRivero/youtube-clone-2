import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getVideoDetails } from '../store/reducers/getVideoDetails';
import { getRecommendedVideos } from '../store/reducers/getRecommendedVideos';
import Navbar from '../components/Navbar';
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import WatchCard from '../components/WatchCard';
import Spinner from '../components/Spinner';

function Watch() {

  const [showMoreStatus,setShowMoreStatus] = useState<boolean>(false);
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtubeApp.recommendedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
      setShowMoreStatus(false);
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideos(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <>{
      currentPlaying && currentPlaying?.videoId === id ? (
        <div className="flex flex-col">{/* max-h-screen */}
          <div className='fixed top-0 left-0 w-full z-20 bg-[#0f0f0f]'>
            <Navbar/>
          </div>
          <div className='flex w-full h-[calc(100vh-56px)] mt-[56px] relative' >
            <div className='flex gap-y-10 gap-x-5  m-auto w-full overflow-auto'>{/* p-5 */}
              <div className='w-full'>
                <iframe 
                  className="w-full h-[32vh] sm:h-[75vh] fixed top-[56px] left-0 sm:static md:fixed lg:static z-30"
                  src={`https://www.youtube.com/embed/${id}?autoplay=1`} 
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Youtube video player"
                ></iframe>
                {/* Video Details */}
                <div className='flex flex-col mt-[181.75px] sm:mt-0 md:flex-row justify-center md:gap-6 w-full lg:max-w-[90%] mx-auto pb-5 2xl:px-0'>
                  <div className="mt-4 px-4 sm:px-5">{/* w-fit */}
                    <p className="text-xl">{currentPlaying.videoTitle}</p>
                    <div className="flex flex-col xl:flex-row justify-between mt-1">
                      <div className="text-sm text-gray-400">
                        <span className="after:content-['•'] after:mx-1">
                          {currentPlaying.videoViews} views
                        </span>
                        <span> {currentPlaying.videoAge} ago</span>
                      </div>
                      <div className="flex items-center gap-4 uppercase mt-1 xl:mt-0 overflow-auto scrollbar-hide">
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BiLike className="text-xl" />
                          <strong>{currentPlaying.videoLikes}</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BiDislike className="text-xl" />
                          <strong>dislike</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <FaShare className="text-xl" />
                          <strong>share</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <HiScissors className="text-xl" />
                          <strong>clip</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <MdOutlinePlaylistAdd className="text-xl" />
                          <strong>save</strong>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <BsThreeDots className="text-xl" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 flex-col border-solid border-gray-400 border-2 my-5 pb-3 border-l-transparent border-r-transparent">
                      <div className="flex items-center gap-3 md:gap-5  mt-4">{/* mr-5 */}
                        <div>
                          <img
                            src={currentPlaying.channelInfo.image}
                            alt=""
                            className="rounded-full w-[34px] sm:h-12 sm:w-12"
                          />
                        </div>
                        <div className="w-fit">
                          <h5 className="text-sm line-clamp-1 md:line-clamp-none">
                            <strong>{currentPlaying.channelInfo.name}</strong>
                          </h5>
                          <h6 className="text-gray-400 text-xs">
                            {currentPlaying.channelInfo.subscribers}
                            <span className='hidden md:block'>
                              subscribers
                            </span> 
                          </h6>
                        </div>
                        <div className='ml-auto'>
                          <button className=" bg-white text-black rounded-full py-2 px-4 text-sm tracking-wider font-[500]">
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <div
                        className={`${
                          !showMoreStatus ? "max-h-16 overflow-hidden" : ""
                        } text-sm w-11/12`}
                      >
                        <pre
                          style={{
                            fontFamily: `"Roboto", sans-serif`,
                          }}
                          className="whitespace-pre-wrap"
                        >
                          {currentPlaying.videoDescription}
                        </pre>
                      </div>
                      <div>
                        <button
                          className="uppercase text-sm cursor-pointer"
                          onClick={() => setShowMoreStatus(!showMoreStatus)}
                        >
                          Show {showMoreStatus ? "less" : "more"}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Recommended Videos  */}
                  <div className="flex flex-col gap-3 mt-4">
                    {getRecommendedVideos.length && recommendedVideos.map((item) => {
                      return <WatchCard data={item} key={item.videoId} />;
                    })}
                  </div>
                </div>
              </div>
              {/* <div className="mr-24 flex flex-col gap-3">
                {getRecommendedVideos.length && recommendedVideos.map((item) => {
                  return <WatchCard data={item} key={item.videoId} />;
                })}
              </div> */}
            </div>
          </div>
        </div>
      ) : <div className='h-[calc(100vh-56px)] w-full flex'><Spinner /></div>
    }</>
  )
}

export default Watch