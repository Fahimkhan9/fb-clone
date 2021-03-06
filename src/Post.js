import React,{useState} from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Post({profilePic,image,username,timestamp,message}) {
    const [likeColor,setLikeColor]  = useState('') 
    const [likeCount,setLikeCount] = useState(0)

const handleLike = () => {
    setLikeCount(pre => likeCount ? pre -1 : pre +1 )
    setLikeColor(pre => likeColor ? '' : "primary")
}

    return (
        <div  className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
<div className="post__topinfo">
    <h3>{username}</h3>
     <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
    {/* <p>{new Date(timestamp ? .toDate()).toUTCString()}</p> */}


</div>
            </div>
            <div className="post__bottom">
    <p>{message}</p>
            </div>

            <div className="post__image">
                <img  src={image} alt=""/>
            </div>
            <div className="post__options">
<div className="post__option" onClick={handleLike}>
    <b style={{marginRight: '5px'}}>{likeCount}</b>
<ThumbUpIcon  color={likeColor} />
<p>Like</p>
</div>
<div className="post__option">
<ChatBubbleOutlinedIcon/>
<p>Comment</p>
</div>
<div className="post__option">
<NearMeIcon/>
<p>Share</p>
</div>
<div className="post__option">
<AccountCircleIcon />
<ExpandMoreIcon/>
</div>

            </div>
        </div>
    )
}

export default Post
