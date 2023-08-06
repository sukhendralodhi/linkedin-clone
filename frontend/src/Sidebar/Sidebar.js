import React from 'react';
import "../Sidebar/Sidebar.css";
import { Avatar } from '@mui/material';

const Sidebar = () => {
    // reusable function 
    const recentItem = (topic) => (
        <div className="side_bar_recentItem">
            <span className="side_bar_hash">#</span>
            <p>{topic}</p>
        </div>

    )
    return (
        <div className='side_bar'>
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <Avatar className='sidebar_avatar' />
                <h2>Sukhendra Singh Lodhi</h2>
                <h4>developer.sukhendra@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who view you</p>
                    <p className="sidebar_stat_number">
                        2,453
                    </p>
                </div>

                <div className="sidebar_stat">
                    <p>View on post</p>
                    <p className="sidebar_stat_number">
                        102
                    </p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react js')}
                {recentItem('programming')}
                {recentItem('designing')}
                {recentItem('coding')}
                {recentItem('frontend')}
            </div>
        </div>
    )
}

export default Sidebar