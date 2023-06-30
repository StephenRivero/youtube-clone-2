import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { clearVideos } from '../store';

function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className='max-h-screen overflow-hidden'>
      <div >
        <Navbar />
      </div>
      <div className='flex flex-col-reverse lg:flex-row h-[calc(100vh-56px)] w-full bg-[#0f0f0f] overflow-hidden'>
        <Sidebar />
        <div className='h-[calc(100vh-124px)] lg:h-[calc(100vh-56px)] w-full flex pt-[10px] lg:mt-0'>
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={1024}
            >
              <div className='flex flex-wrap justify-center gap-y-4 sm:gap-y-8 gap-x-8 w-full lg:pt-0'>{/* p-4 */}
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

export default Home