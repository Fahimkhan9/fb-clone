import React ,{useState,useEffect}from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'
function Feed() {
    const [posts,setPosts] = useState([])
useEffect(()=>{
db.collection("posts").onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc => (
        {
            id: doc.id,
            data:  doc.data()    
        }
    )))
})
},[])

     return (
        <div className="feed">
            {/* storreel */}
            <StoryReel/>
        {/* messagesender */}
            <MessageSender/>
            {/* post */}



{posts.map(post => (
    <Post
    key={post.id}
    profilePic={post.data.profilePic}
    message={post.data.message}
    username={post.data.username}
    image={post.data.image}
    timestamp={post.data.timestamp   }
    />
))}







            {/* <Post
            // key={id}
            profilePic={"https://www.gstatic.com/tv/thumb/persons/614/614_v9_bc.jpg"}
            message={"wow"}
            image={"https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"}
            username={"Fahim alif"}
            timestamp={"timestamp"}

            />
            
              <Post
            
            // key={id}
            profilePic={"https://www.gstatic.com/tv/thumb/persons/614/614_v9_bc.jpg"}
            message={"wow"}
            // image={"https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"}
            username={"Fahim alif"}
            timestamp={"timestamp"}

            /> */}
        </div>
    )
}

export default Feed
