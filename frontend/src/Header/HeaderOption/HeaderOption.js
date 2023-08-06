import { Avatar } from '@mui/material';
import '../HeaderOption/HeaderOption.css';


const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <div className='headerOption'>
            {
                Icon && <Icon className='headerOption_icon' />
            }
            {
                avatar && (
                    <Avatar src={avatar} className='headerOption_icon' />
                )
            }

            <h3 className='headerOption_title'>{title}</h3>

        </div>
    )
}

export default HeaderOption