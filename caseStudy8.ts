type Profile = {
    username: string,
    bio: string | null,
    avatarUrl ?: string
}

let profile1 : Profile = {
    username: "John Doe",
    bio : null,

}

let profile2 : Profile = {
    username : "Alice ",
    bio : "software engineer",
    avatarUrl : "https://example.com/avatar.jpg"
}

function showProfile(profile: Profile){
    let bioInfo = profile.bio === null ? "Bio not provided" : `Bio: ${profile.bio}`;
    let avatarInfo = profile.avatarUrl ? `Avatar: ${profile.avatarUrl}` : "Avatar not set";
    console.log(`${profile.username} - ${bioInfo}, ${avatarInfo}`);
}

showProfile(profile1);
showProfile(profile2);