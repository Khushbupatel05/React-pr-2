import React, { useEffect, useRef, useState } from 'react';
import domtoimage from 'dom-to-image';

const GithubApi = () => {
    const captureRef = useRef(null);
    const [userName, setuserName] = useState('');
    const [query, setQuery] = useState('');
    const [userData, setUserData] = useState('');

    const downloadCard = () => {
        const node = captureRef.current;
        if (!node) return;

        domtoimage.toJpeg(node, { quality: 0.95 }) 
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'github_profile_card.jpg'; 
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error generating image:', error);
            });
    };

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
                            className="bg-fuchsia-900 py-1.5 px-3  text-white rounded hover:bg-fuchsia-800 mt-2"
                            onClick={() => setQuery(userName)}>
                            Search
                        </button>
                    </div>

                    <div ref={captureRef} className='py-6 text-amber-50 bg-[#ffff]  '>
                        <div className="flex justify-center mb-4" >
                            <div className="w-28 h-28 rounded-full border-4 border-yellow-400 p-1 bg-white" >
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

                    <div className="flex justify-center gap-2.5 mt-6">
                        <button
                            onClick={downloadCard}
                            className="bg-fuchsia-900 hover:bg-fuchsia text-white   hover:bg-fuchsia-800 px-5 py-2 rounded-lg shadow-md"
                        >
                            Download
                        </button>

                        {userData?.html_url && (
                            <a
                                href={userData.html_url}
                                target="_blank"
                                rel=""
                                className="bg-fuchsia-900 hover:bg-fuchsia text-white hover:bg-fuchsia-800 px-3 py-2 rounded-lg shadow-md transition flex items-center">
                                <i className="fa-brands fa-github mr-2"></i> Visit GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubApi;