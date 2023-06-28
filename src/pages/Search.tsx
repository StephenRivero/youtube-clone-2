import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { clearVideos } from '../store';
import { useNavigate } from 'react-router-dom';

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
      <div className='flex h-[calc(100vh-56px)] w-full bg-[#0f0f0f]'>
        <Sidebar />
        <div className='h-[calc(100vh-56px)] w-full flex'>
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={1024}
            >
              <div className='flex flex-wrap justify-center gap-y-8 gap-x-8  p-4 w-full'>
                {videos.map((item: HomePageVideos) => {
                  return <Card data={item} key={item.videoId} />;
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