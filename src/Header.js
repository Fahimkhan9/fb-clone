import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar,IconButton} from '@material-ui/core'
import { useStateValue } from './StateProvider'

function Header() {
 const [{user},dispatch] =  useStateValue()

    return (
        <div className='header'>
            <div className="header__left">
            <img src='https://i.pinimg.com/originals/41/b0/ed/41b0edd10bd1fcca1833c2e651fcfdaa.png' />
            <div className='header__input'>
                <SearchIcon/>
                <input type="text" placeholder="Search Facebook" />
            </div>
            </div>
          
            <div className="header__middle">
            
                <div className="header__option header__option--active">
<HomeIcon fontSize="large" />
                </div>
                <div className="header__option header__option--active">
<FlagIcon fontSize="large" />
                </div> 
                <div className="header__option header__option--active">
<SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option header__option--active">
<StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option header__option--active">
<SupervisedUserCircleOutlinedIcon fontSize="large" />
                
                </div>
               
            </div>
            <div className="header__right">
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>













        </div>
    )
}

export default Header
