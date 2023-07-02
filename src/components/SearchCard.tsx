/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

function SearchCard({ data }: { data: HomePageVideos }) {
    
    return (
        <div className="group w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 justify-center">
            <div className='relative'>
                <span className='absolute bottom-1 right-1 text-xs bg-black/80 px-[5px] py-[1px] z-10 rounded-[4px]'>
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img 
                        src={data.videoThumbnail} 
                        className='w-[100vw] sm:w-[200px] md:w-[100vw] lg:w-[360px] sm:rounded-xl group-hover:rounded-none transition duration-1000' 
                        alt="Thumbnail" 
                    />
                </Link>
            </div>
            {/* Video Details starting width 1024px */}
            <div className="hidden relative lg:flex flex-col gap-1 ">
                <div className='flex justify-between'>
                    <div className='lg:flex flex-col lg:w-[50vw] xl:w-[665px] 2xl:w-[700px]'>
                        <h3 className='lg:max-w-[485px] xl:max-w-[664px] 2xl:max-w-[700px]'>
                            <a href={`/watch/${data.videoId}`} className='line-clamp-2 '>
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
                    </div>
                    <span className='sm:mt-3 md:mt-0 hidden group-hover:block absolute top-0 right-0 xl:right-[-20px] 2xl:right-[-30px]'>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </span>
                </div>
                <div className="min-w-fit my-2">
                    <a href="#video-channel" className='flex items-center gap-2 text-xs text-gray-400'>
                        <img 
                            src={data.channelInfo.image} 
                            alt="" 
                            className='h-9 w-9 rounded-full'
                        />
                        <span>{data.channelInfo.name}</span>
                    </a>
                </div>
                <div className="hidden lg:block lg:max-w-[510px] xl:max-w-[664px] 2xl:max-w-[700px] line-clamp-2 text-sm text-gray-400">
                    <p>{data.videoDescription}</p>
                </div>
            </div>
            {/* Video Details starting width 640px to before 1024px */}
            <div className="flex sm:w-[60vw] md:w-full sm:flex-col-reverse sm:justify-end md:justify-start md:flex-row lg:hidden sm:gap-1 md:gap-[12px]">
                <div className="min-w-fit md:mt-[3px]">
                    <a href="#video-channel" className='flex items-center gap-2 text-xs text-gray-400 px-2 pt-1 sm:pl-0 sm:pt-0'>
                        <img 
                            src={data.channelInfo.image} 
                            alt="" 
                            className='h-10 w-10 rounded-full'
                        />
                    </a>
                </div>
                <div className='flex w-full justify-between'>
                    <div className='flex flex-col'>
                        <h3 className='sm:max-w-[350px] lg:max-w-[500px] xl:max-w-[664px]'>{/*w-full */}
                            <a href={`/watch/${data.videoId}`} className='line-clamp-2 md:line-clamp-1 lg:line-clamp-2  '>
                                {data.videoTitle}
                            </a>
                        </h3>
                        <div className='flex flex-wrap text-xs text-gray-400 sm:mt-[3px] md:mt-0'>
                            <span className="after:content-['●'] after:mx-2 ">
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
                    <span className='sm:mt-3 md:mt-0'>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default SearchCard