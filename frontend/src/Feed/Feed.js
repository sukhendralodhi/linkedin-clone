import axios from 'axios';

import '../Feed/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './Input-options/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Post from './Post/Post';
import { useEffect, useState } from 'react';

const Feed = () => {
    const [posts, setPost] = useState([]);
    const [text, setText] = useState('');

    // handle post function 
    const sendPost = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/posts', {
                description: text,
            });
        } catch (error) {
            console.error("Error while creating post", error);
        }
        setText('');
    }

    const getPost = async () => {
        const response = await axios.get('http://localhost:5001/api/posts');
        const posts = await response.data;
        setPost(posts);
    }

    useEffect(() => {
        getPost();
    }, [text, posts]);


    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input
                            type="text" value={text} onChange={(e) => setText(e.target.value)} />
                        <button
                            onClick={sendPost} type='submit'>
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption
                        Icon={ImageIcon}
                        title="Photo"
                        color="#70B5F9" />
                    <InputOption
                        Icon={YouTubeIcon}
                        title="Video"
                        color="#E7A33E" />
                    <InputOption
                        Icon={WorkIcon}
                        title="Job"
                        color="#a872e8" />
                    <InputOption
                        Icon={CalendarMonthIcon}
                        title="Write Article"
                        color="#7FC15E" />
                </div>
            </div>
            {/*Post Section Start */}
            {
                posts.map((post) => {
                    const { _id, description } = post;
                    return (
                        <Post key={_id} description={description} />
                    );
                })
            }
            {/*Post Section End */}
        </div>
    );
}

export default Feed;