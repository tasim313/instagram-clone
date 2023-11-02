import React from 'react'


const Post = ({id, username, userImg, img, caption}) =>{
    return(
        <>
        <div>
           <h1>{username}</h1>
           <h2>{userImg}</h2>
           <h3>{img}</h3>
        </div>
        </>
    )
}

export default Post