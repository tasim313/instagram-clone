import React from "react";

const MiniProfile = () =>{
    return(
        <>
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="h-16 rounded-full border p-[2px]" src="https://media.licdn.com/dms/image/C4E03AQEvhzZA4RQB4Q/profile-displayphoto-shrink_800_800/0/1639602808880?e=2147483647&v=beta&t=Tn8kApqLHW5SX_uuxLOPmxo-zQItiKfKlMeW9OAx7Jc" alt="user-image"/>
            <div className="flex-1 ml-4">
                 <h2 className="font-bold">tasim</h2>
                 <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button className="font-semibold text-blue-400 text-sm ml-8">Sign Out</button>
        </div>
        </>
    )
}

export default MiniProfile;