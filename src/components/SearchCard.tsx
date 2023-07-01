/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

function SearchCard({ data }: { data: HomePageVideos }) {
    
    return (
        <div className="group flex md:flex-col lg:flex-row gap-3 ">
            <div className='relative'>
                <span className='absolute bottom-1 right-1 text-xs bg-black/80 px-[5px] py-[1px] z-10 rounded-[4px]'>
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img 
                        src={data.videoThumbnail} 
                        className='w-full md:w-[100vw] lg:w-[360px] rounded-xl group-hover:rounded-none transition duration-1000' 
                        alt="Thumbnail" 
                    />
                </Link>
            </div>
            {/* Video Details starting width 1024px */}
            <div className="hidden lg:flex flex-col gap-1 ">
                <h3 className='max-w-2xl'>
                    <a href="#" className='line-clamp-2 lg:max-w-[500px] xl:max-w-[664px]'>
                        {data.videoTitle}
                    </a>
                </h3>
                <div className='text-xs text-gray-400'>
                    <span className="after:content-['●'] after:mx-1">
                        {data.videoViews} views
                    </span>
                    <span>
                        {data.videoAge}
                    </span>
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
                <div className="hidden lg:block lg:max-w-[500px] xl:max-w-[664px] line-clamp-2 text-sm text-gray-400">
                    <p>{data.videoDescription}</p>
                </div>
            </div>
            {/* Video Details starting width 768px to before 1024px */}
            <div className="flex gap-[12px]">
                <div className="min-w-fit mt-[3px]">
                    <a href="" className='flex items-center gap-2 text-xs text-gray-400'>
                        <img 
                            src={data.channelInfo.image} 
                            alt="" 
                            className='h-10 w-10 rounded-full'
                        />
                    </a>
                </div>
                <div className='flex flex-col'>
                    <h3 className='w-full'>
                        <a href="#" className='md:line-clamp-1 lg:line-clamp-2 lg:max-w-[500px] xl:max-w-[664px]'>
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className='flex text-xs text-gray-400'>
                        <span className="after:content-['●'] after:mx-2">
                            {data.channelInfo.name}
                        </span>
                        <span className="after:content-['●'] after:mx-2">
                            {data.videoViews} views
                        </span>
                        <span>
                            {data.videoAge}
                        </span>
                    </div>
                </div>
                <span className='ml-auto'>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default SearchCard