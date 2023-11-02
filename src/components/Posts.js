import React from 'react'
import Post from './Post'

const Posts = () =>{
    const posts = [
        {
            id: "1",
            username: "tasim",
            userImage: "https://media.licdn.com/dms/image/C4E03AQEvhzZA4RQB4Q/profile-displayphoto-shrink_800_800/0/1639602808880?e=2147483647&v=beta&t=Tn8kApqLHW5SX_uuxLOPmxo-zQItiKfKlMeW9OAx7Jc",
            img: "https://image.shutterstock.com/image-photo/kayak-people-kayaking-sea-leisure-260nw-188806724.jpg",
            caption: "Nice Picture"
        },
        {
            id: "2",
            username: "tasim",
            userImage: "https://image.shutterstock.com/image-photo/people-traveler-walk-on-mountain-260nw-1549815635.jpg",
            img: "https://image.shutterstock.com/image-photo/people-traveler-walk-on-mountain-260nw-1549815635.jpg",
            caption: "Nice Picture"
        },
        {
            id: "3",
            username: "tasim",
            userImage: "https://image.shutterstock.com/image-photo/young-asian-man-staying-blanket-260nw-1130283710.jpg",
            img: "https://image.shutterstock.com/image-photo/young-asian-man-staying-blanket-260nw-1130283710.jpg",
            caption: "Nice Picture"
        },
        {
            id: "4",
            username: "tasim",
            userImage: "https://image.shutterstock.com/image-photo/perfect-place-stay-rear-view-260nw-763028872.jpg",
            img: "https://image.shutterstock.com/image-photo/perfect-place-stay-rear-view-260nw-763028872.jpg",
            caption: "Nice Picture"
        },
        {
            id: "5",
            username: "tasim",
            userImage: "https://image.shutterstock.com/image-photo/group-friends-enjoying-nature-260nw-1080371708.jpg",
            img: "https://image.shutterstock.com/image-photo/group-friends-enjoying-nature-260nw-1080371708.jpg",
            caption: "Nice Picture"
        },
        {
            id: "6",
            username: "tasim",
            userImage: "https://image.shutterstock.com/image-photo/happy-young-man-tourist-sitting-260nw-2112122846.jpg",
            img: "https://image.shutterstock.com/image-photo/happy-young-man-tourist-sitting-260nw-2112122846.jpg",
            caption: "Nice Picture"
        }
    ]
    return(
        <>
        <div>
            {posts.map(post =>(
                <Post 
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImage}
                img={post.img}
                caption={post.caption}
                />
            ))}
        </div>
        </>
    )
}


export default Posts