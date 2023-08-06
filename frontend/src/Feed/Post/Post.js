import React from 'react';
import '../Post/Post.css';
import { Avatar } from '@mui/material';
import InputOption from '../Input-options/InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = ({ description }) => {
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar src='' />
                <div className="post_info">
                    {/* <h2 className="name"></h2>*/}
                    <p className="description"></p>
                </div>
            </div>
            <div className="post_body">
                <p className="message">{description}</p>
            </div>
            <div className="post_button">
                <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    );
}

export default Post;