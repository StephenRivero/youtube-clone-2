/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

function Card({ data }: { data: HomePageVideos }) {

    // const isData = data ? true : false;
    
    return (
        <div className='group w-full sm:w-64 sm:h-60  3xl:w-[310px] 3xl:h-[294.5px] flex gap-3 flex-col'> {/* 2xl:w-[360px] 2xl:h-[302px] */}
           
            <div className='relative'>
                <span className='absolute bottom-1 right-1 text-xs bg-black/80 px-[5px] py-[1px] z-10 rounded-[4px]'>
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img src={data.videoThumbnail} className='w-full h-full sm:rounded-xl group-hover:rounded-none transition duration-1000' alt="Thumbnail" />{/* h-44 w-72 */}
                </Link>
            </div>
            <div className="flex gap-3 pl-3 sm:pl-0">
                <div className="min-w-fit">
                    <a href="#">
                        <img 
                            src={data.channelInfo.image}
                            alt="channel"
                            className='h-9 w-9 rounded-full' 
                        />
                    </a>
                </div>
                <div>
                    <h3>
                        <a href="#" className='line-clamp-2'>
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className="flex sm:block text-sm text-gray-400">
                        <div>
                            <a href="#" className="hover:text-white after:content-['●'] sm:after:content-none after:mx-1 sm:after:mx-0">
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <span className="after:content-['●'] after:mx-1">
                            {data.videoViews} views
                        </span>
                        <span>
                            {data.videoAge}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card