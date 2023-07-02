/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

function Card({ data }: { data: HomePageVideos }) {

    // const isData = data ? true : false;
    
    return (
        <div className='group w-full h-fit sm:w-64  md:w-[360px] xl:w-[320px] 2xl:w-[310px] flex gap-2 sm:gap-3 flex-col'> {/* sm:h-60 xl:h-[302px] 2xl:w-[360px] 2xl:h-[302px] */}
           
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
                    <a href="#channel-logo">
                        <img 
                            src={data.channelInfo.image}
                            alt="channel"
                            className='h-9 w-9 rounded-full mt-[5px]' 
                        />
                    </a>
                </div>
                <div>
                    <h3>
                        <a href={`/watch/${data.videoId}`} className='line-clamp-2'>
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className="flex flex-wrap  lg:block text-sm text-gray-400">{/* gap-1 lg:gap-0 */}
                        <div>
                            <a href="#channel-name" className="hover:text-white after:content-['●'] after:p-1 lg:after:content-none after:mx-1 lg:after:mx-0">
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <span className="after:content-['●'] after:p-2">
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