import React, { useEffect, useState } from 'react';

const GithubApi = () => {
    const [userName, setuserName] = useState('');
    const [query, setQuery] = useState('');
    const [userData, setUserData] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`https://api.github.com/users/${query}`);
            const data = await res.json();
            setUserData(data);
        };
        fetchUser();
    }, [query]);

    return (
        
        <React.Fragment>
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#e4d9f7] p-6">
                <div>
                    <h1 className='text-fuchsia-900 font-semibold text-center text-4xl my-[24px]'>
                        GitHub Username Search
                    </h1>
                </div>

                <div className="bg-white rounded-[30px] shadow-xl text-center px-6 py-10 w-[340px] relative">
                    <div className="mb-4">
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded px-3 py-1 mr-2 focus:outline-none"
                            placeholder="Enter GitHub username"
                            onChange={(e) => setuserName(e.target.value)}
                        />
                        <button
                            className="bg-fuchsia-300 py-1 px-4 text-white rounded hover:bg-fuchsia-400 mt-2"
                            onClick={() => setQuery(userName)}
                        >
                            Search
                        </button>
                    </div>

                    <div className="flex justify-center mb-4">
                        <div className="w-28 h-28 rounded-full border-4 border-yellow-400 p-1 bg-white">
                            <img
                                src={userData?.avatar_url || "https://avatars.githubusercontent.com/u/583231?v=4"}
                                alt="avatar"
                                className="rounded-full w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800">{userData?.name}</h2>
                    <p className="text-sm text-gray-500">{userData?.login}@github.com</p>

                    <p className="text-sm text-gray-600 mt-3 leading-relaxed text-[13px]">
                        {userData?.bio}
                    </p>

                    <div className="mt-6 flex justify-around text-[#2b2353] text-sm font-medium">
                        <div>
                            <p className="text-[22px] font-bold">{userData?.followers}</p>
                            <p>Followers</p>
                        </div>
                        <div>
                            <p className="text-[22px] font-bold">{userData?.following}</p>
                            <p>Following</p>
                        </div>
                        <div>
                            <p className="text-[22px] font-bold">{userData?.public_repos}</p>
                            <p> repository</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubApi;
