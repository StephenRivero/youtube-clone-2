/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { RecommendedVideos } from '../Types'
import { Link } from 'react-router-dom'

function WatchCard({ data }: { data: RecommendedVideos }) {
    
    return (
        <div className="group flex flex-col sm:flex-row gap-3 md:w-[38vw] lg:w-fit">
            <div className='relative'>
                <span className='absolute bottom-1 right-1 text-xs bg-black/80 px-[5px] py-[1px] z-10 rounded-[4px]'>
                    {data.videoDuration}
                </span>
                <div className='sm:h-24 sm:w-40'>
                    <Link to={`/watch/${data.videoId}`}>
                        <img 
                            src={data.videoThumbnail} 
                            className='w-full h-full sm:rounded-xl group-hover:rounded-none transition duration-1000' 
                            alt="Thumbnail" 
                        />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-1 w-full px-4 sm:px-0 md:w-[202px]">
                <h4 className='text-sm'>
                    <a href={`/watch/${data.videoId}`} className='line-clamp-2'>
                        {data.videoTitle}
                    </a>
                </h4>
                <div className='flex md:flex-col lg:flex-row text-xs text-gray-400'>
                    <div>
                        <a href="#channel-name" className='hover:text-white'>
                            {data.channelInfo.name}
                        </a>
                    </div>
                    <div className='flex flex-wrap'>
                        <span className="before:content-['●'] before:mx-1 lg:before:mx-2">
                            {data.videoViews} views
                        </span>
                        {/* <span className="before:content-['●'] before:mx-1 lg:before:mx-2">
                            {data.videoAge}
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchCard