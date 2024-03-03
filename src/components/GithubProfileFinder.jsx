import React, { useEffect, useState } from 'react'
import GithubUser from './GithubUser';
import StarRating from './StarRating';

export default function GithubProfileFinder() {
    const [user, setUser] = useState('zhenyubai03');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUser() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${user}`);
        const data = await res.json();

        if (data['message']!=="Not Found") {
            setData(data);
            setLoading(false);
        }
    }

    function handleFind() {
        fetchGithubUser();
    }

    useEffect(() => {
        fetchGithubUser();
    }, [])


    return (
        <div className="">
            <div className="github-prof">
                <div className="input-wrapper">
                    <input 
                        className="search-by-user" 
                        type="text" 
                        placeholder="Find a Github user..." 
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <button onClick={handleFind}>Find</button>
                </div>
                {
                    data !== null ? <GithubUser user={data}/> : <h1>No user found</h1>
                }
                {
                    loading ? <h1>Loading...</h1> : null
                }
            </div>
            {/* <StarRating target={user}/> */}
        </div>
    )
}
