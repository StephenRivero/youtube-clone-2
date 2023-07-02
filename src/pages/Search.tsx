import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
// import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { clearVideos } from '../store';
import { useNavigate } from 'react-router-dom';
import SearchCard from '../components/SearchCard';

function Search() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideos());
    if(searchTerm === "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false))
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className='max-h-screen overflow-hidden'>
      <div >
        <Navbar />
      </div>
      <div className='flex flex-col-reverse lg:flex-row h-[calc(100vh-56px)] w-full bg-[#0f0f0f] overflow-hidden'>
        <Sidebar />
        <div className='h-[calc(100vh-108px)] lg:h-[calc(100vh-56px)] w-full flex'>
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={1180}
            >
              <div className='flex flex-wrap justify-start 3xl:justify-center gap-y-3 lg:gap-y-8 gap-x-4 lg:gap-x-8 sm:p-3 md:p-4 w-full '>{/*2xl:pl-[160px] 3xl:pl-[320px] */}
                {videos.map((item: HomePageVideos) => {
                  return <SearchCard data={item} key={item.videoId} />;
                })}
              </div>
            </InfiniteScroll>
          ):  <Spinner />}
        </div>
      </div>
    </div>
  )
}

export default Search