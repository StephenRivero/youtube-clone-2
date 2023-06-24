import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';

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
      </div>
    </div>
  )
}

export default Home