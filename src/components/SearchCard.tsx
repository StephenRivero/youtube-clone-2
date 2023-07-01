/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

function SearchCard({ data }: { data: HomePageVideos }) {
    
    return (
        <div className="group flex gap-3 ">
            <div className='relative'>
                <span className='absolute bottom-1 right-1 text-xs bg-black/80 px-[5px] py-[1px] z-10 rounded-[4px]'>
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img 
                        src={data.videoThumbnail} 
                        className='w-full lg:w-[360px] rounded-xl group-hover:rounded-none transition duration-1000' 
                        alt="Thumbnail" 
                    />
                </Link>
            </div>
            <div className="flex gap-1 flex-col">
                <h3 className='max-w-2xl'>
                    <a href="#" className='line-clamp-2 lg:max-w-[500px] xl:max-w-[664px]'>
                        {data.videoTitle}
                    </a>
                </h3>
                <div className='text-xs text-gray-400'>
                    <div>
                        <div>
                            <span className="after:content-['●'] after:mx-1">
                                {data.videoViews} views
                            </span>
                            <span>
                                {data.videoAge}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="min-w-fit my-2">
                    <a href="" className='flex items-center gap-2 text-xs text-gray-400'>
                        <img 
                            src={data.channelInfo.image} 
                            alt="" 
                            className='h-9 w-9 rounded-full'
                        />
                        <span>{data.channelInfo.name}</span>
                    </a>
                </div>
                <div className="lg:max-w-[500px] xl:max-w-[664px] line-clamp-2 text-sm text-gray-400">
                    <p>{data.videoDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchCard