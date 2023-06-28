import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"; 
import { TiMicrophone } from "react-icons/ti";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../store';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

function Navbar() {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
    const handleSearch = () => {
        if(location.pathname !== "/search") navigate("/search");
        else {
            dispatch(clearVideos())
            dispatch(getSearchPageVideos(false))
        }
    }

  return (
    <div className='flex justify-between items-center px-[22px] h-14 bg-[#0f0f0f] opacity-95 sticky'> {/* bg-[#212121] */}
        <div className='flex gap-7 items-center text-2xl mr-9'>
            <div>
                <GiHamburgerMenu />
            </div>
            <Link to="/">
                <div className="flex gap-1 items-center justify-center">
                    <BsYoutube className="text-3xl text-red-600" />
                    <span className='text-xl font-medium'>YouTube</span>
                </div>
            </Link>
        </div>
        <div className='flex items-center justify-center gap-2'>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}
            >
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-full border border-gray-700'>
                    <div className='flex gap-4 items-center pr-5'>
                        <div>
                            <AiOutlineSearch className="text-xl"/>
                        </div>
                        <input 
                            type="text"
                            placeholder='Search'
                            className='w-[30vw] bg-zinc-900 focus:outline-none border-none'
                            value={searchTerm}
                            onChange={e=>dispatch(changeSearchTerm(e.target.value))}
                        />
                        <AiOutlineClose 
                            className={`text-xl cursor-pointer ${
                                !searchTerm ? "invisible" : "visible"
                            }`}
                            onClick={()=>dispatch(clearSearchTerm())}
                        />
                    </div>
                    <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full border border-gray-700'>
                        <AiOutlineSearch className="text-xl"/>
                    </button>
                </div>
            </form>
            <div className="text-xl p-3 bg-zinc-900 rounded-full">
                <TiMicrophone />
            </div>
        </div>
        <div className='flex gap-8 items-center text-xl'>
            <BsCameraVideo/>
            {/* <IoIosKeypad/> */}
            <div className='relative'>
                <BsBell/>
                <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>
                    9+
                </span>
            </div>
            <img 
                className='w-9 h-9 rounded-full'
                src="https://avatars.githubusercontent.com/u/79730009?v=4" 
                alt="logo" 
            />
        </div>
    </div>
  )
}

export default Navbar