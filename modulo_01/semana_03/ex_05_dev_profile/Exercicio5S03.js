async function search() {
    const response = await fetch('https://api.github.com/users/taelenmachado')
    const json = await response.json()
    console.log(json?.name)
    document.getElementById('name').innerHTML = json?.name;
    document.getElementById('bio').innerHTML = json?.bio;
    document.getElementById('html_url').innerHTML = json?.html_url;
    document.getElementById('location').innerHTML = json?.location;
    document.getElementById('avatar_url').src = json?.avatar_url;
    console.log(json.avatar_url.value)
}
search()