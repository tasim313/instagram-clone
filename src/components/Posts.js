import React, { useEffect, useState } from 'react'
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'


const Posts = () =>{

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
            setPosts(snapshot.docs);
        }
        );
        return unsubscribe;
    }, [db]); 

    

    // const posts = [
    //     {
    //         id: "1",
    //         username: "tasim",
    //         userImage: "https://media.licdn.com/dms/image/C4E03AQEvhzZA4RQB4Q/profile-displayphoto-shrink_800_800/0/1639602808880?e=2147483647&v=beta&t=Tn8kApqLHW5SX_uuxLOPmxo-zQItiKfKlMeW9OAx7Jc",
    //         img: "https://image.shutterstock.com/image-photo/kayak-people-kayaking-sea-leisure-260nw-188806724.jpg",
    //         caption: "Nice Picture"
    //     },
    //     {
    //         id: "2",
    //         username: "tasim",
    //         userImage: "https://media.licdn.com/dms/image/C4E03AQEvhzZA4RQB4Q/profile-displayphoto-shrink_800_800/0/1639602808880?e=2147483647&v=beta&t=Tn8kApqLHW5SX_uuxLOPmxo-zQItiKfKlMeW9OAx7Jc",
    //         img: "https://image.shutterstock.com/image-photo/people-traveler-walk-on-mountain-260nw-1549815635.jpg",
    //         caption: "Nice Picture"
    //     },
    //     {
    //         id: "3",
    //         username: "tasim",
    //         userImage: "https://media.licdn.com/dms/image/C4E03AQEvhzZA4RQB4Q/profile-displayphoto-shrink_800_800/0/1639602808880?e=2147483647&v=beta&t=Tn8kApqLHW5SX_uuxLOPmxo-zQItiKfKlMeW9OAx7Jc",
    //         img: "https://image.shutterstock.com/image-photo/young-asian-man-staying-blanket-260nw-1130283710.jpg",
    //         caption: "Nice Picture"
    //     },
    //     {
    //         id: "4",
    //         username: "tasim",
    //         userImage: "https://media.licdn.com/dms/image/C4E03AQEvhzZA4RQB4Q/profile-displayphoto-shrink_800_800/0/1639602808880?e=2147483647&v=beta&t=Tn8kApqLHW5SX_uuxLOPmxo-zQItiKfKlMeW9OAx7Jc",
    //         img: "https://image.shutterstock.com/image-photo/perfect-place-stay-rear-view-260nw-763028872.jpg",
    //         caption: "Nice Picture"
    //     },
    //     {
    //         id: "5",
    //         username: "tasim",
    //         userImage: "https://media.licdn.com/dms/image/C4E03AQEvhzZA4RQB4Q/profile-displayphoto-shrink_800_800/0/1639602808880?e=2147483647&v=beta&t=Tn8kApqLHW5SX_uuxLOPmxo-zQItiKfKlMeW9OAx7Jc",
    //         img: "https://image.shutterstock.com/image-photo/group-friends-enjoying-nature-260nw-1080371708.jpg",
    //         caption: "Nice Picture"
    //     },
    //     {
    //         id: "6",
    //         username: "tasim",
    //         userImage: "https://media.licdn.com/dms/image/C4E03AQEvhzZA4RQB4Q/profile-displayphoto-shrink_800_800/0/1639602808880?e=2147483647&v=beta&t=Tn8kApqLHW5SX_uuxLOPmxo-zQItiKfKlMeW9OAx7Jc",
    //         img: "https://image.shutterstock.com/image-photo/happy-young-man-tourist-sitting-260nw-2112122846.jpg",
    //         caption: "Nice Picture"
    //     }
    // ]

    
    return(
        <>
        <div>
            {posts.map(post =>(
                <Post 
                key={post.id}
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}
                />
            ))}
        </div>
        </>
    )
}


export default Posts