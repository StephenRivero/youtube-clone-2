import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getVideoDetails } from '../store/reducers/getVideoDetails';
import { getRecommendedVideos } from '../store/reducers/getRecommendedVideos';
import Navbar from '../components/Navbar';

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
      currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-scree overlow-hidden">
          <div style={{ height: "7.5vh"}}>
            <Navbar/>
          </div>
          <div className='flex w-full' style={{ height: "92.5vh"}}>
            <div className='flex gap-y-10 gap-x-5 p-7 mx-20 mr-0 w-full overflow-auto'>
              <div style={{ maxWidth: "800px"}}>
                <div>
                  <iframe 
                    src={`https://www.youtube.com/embed/${id}?autoplay-1`} 
                    width="800"
                    height="502"
                    allowFullScreen
                    title="Youtube video player"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }</>
  )
}

export default Watch