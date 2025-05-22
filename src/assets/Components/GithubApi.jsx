import React, { useEffect } from 'react'
import { useState } from 'react';


const GithubApi = () => {
    const [userName, setuserName] = useState('');
    const [query ,setquery] = useState('');
    const [userData, setUserData] = useState('');


    useEffect(()=>{
       const fetchUser = async () => { 
            const res = await fetch(`https://api.github.com/users/${query}`);
            const data = await res.json();
            setUserData(data);
        }
        fetchUser();
    },[query])

  return (
    <React.Fragment>
            <h2 className="text-center my-5">Github Users Profile</h2>
            <div className="container mx-auto">
                <input type="text" className="border border-indigo-800" onChange={(e)=>{
                    setuserName(e.target.value);
                }}/>
                <button type="button" className="bg-indigo-400 py-1 px-4 text-white rounded mx-3" onClick={()=>{
                    setquery(userName);
                }}>Click</button>
            </div>

            <div>
                <h2>{userData.name}</h2>
                <img src={userData.avatar_url} alt="" width={100} />
            </div>

    </React.Fragment>

  )
}

export default GithubApi