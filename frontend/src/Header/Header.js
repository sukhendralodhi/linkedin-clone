import React from 'react';
import '../Header/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    return (
        <div className='header'>
            {/*Left Section*/}
            <div className="header_left">
                {/* logo */}
                <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-512.png" alt="logo" />

                {/*header search bar*/}
                <div className="header_search">
                    {/*Search Icon from material ui */}
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            {/*Right Section*/}
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://media.licdn.com/dms/image/D4D35AQFwjQ5LmrGfbA/profile-framedphoto-shrink_200_200/0/1687428084329?e=1689019200&v=beta&t=8yeLc1hv9rv5VcFuvGSmk0UzjGogrUSBxEFoJeXgMVc" title="me" />
            </div>
        </div>
    )
}

export default Header