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
        <div className="container mx-auto my-14 text-center">
            <input type="text" className='border-2 border-cyan-700 p-0.5 rounded' placeholder='Enter Api Name' onChange={(e)=> {
              setuserName(e.target.value);
            }} />
            <button
                type="button"
                className="bg-cyan-700 text-white rounded ms-2 p-1 px-1.5"
                onClick={() => setquery(userName)}
                >
                Search
            </button>
        </div> 

    </React.Fragment>

  )
}

export default GithubApi