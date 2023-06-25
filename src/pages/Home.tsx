import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';

function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className='flex lg:mt-[10px] xl:mt-[-4px] 2xl:mt-[-12px] 3xl:mt-[-25px] h-[92.5vh] xl:h-[92.9vh] 2xl:h-[93.8vh] 3xl:h-[94.7vh]' >{/* style={{ height: "92.5vh" }} */}
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ):  <Spinner />}
      </div>
    </div>
  )
}

export default Home