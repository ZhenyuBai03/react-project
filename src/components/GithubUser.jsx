export default function GithubUser({user}) {
    const {avatar_url, repos_url, login, html_url} = user; 
    let repos = `https://github.com/${login}?tab=repositories`;
    return (
        <div className="user">
            <div>
                <img src={avatar_url} alt="avatar" className="profile-pic" />
            </div>
            <div className="github-list">
                <a href={html_url} target="_target">{login}</a>
                <a href={repos} target="_target">Repos</a>
            </div>
        </div>
    )
}