import React, { useEffect } from 'react'
import { useState } from 'react';


const GithubApi= () => {
    const [userName , setuserName] = useState('');
    const [query , setQuery] = useState('');
    const [userData , setUserData] = useState('');

    useEffect(() =>{
        if(!query) return;
        const fetchUser = async ()=>{
        const res = await fetch(`https://api.github.com/users/${query}`);
        const data = await res.json();
        setUserData(data);
        console.log(data);
        }
        fetchUser();
    }, [query])

    
  return (
    <React.Fragment>
        <div className="container mx-auto ">
            <input type="text" className='border-2 rounded py-1' onChange={(e) =>{
                setuserName(e.target.value);
            }}/>
            <button className='bg-cyan-500 py-1 px-4 text-white mx-3 rounded' onClick={() =>{
                setQuery(userName);
            }}>Search</button>
        </div>

        <div>
            <h2>{userData.name}</h2>
            <img src={userData.avatar_url} alt="" width={100}/>
        </div>


    </React.Fragment>
    
  )
}
export default GithubApi;