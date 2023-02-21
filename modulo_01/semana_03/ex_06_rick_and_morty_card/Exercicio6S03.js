async function search() {
    const response = await fetch('https://rickandmortyapi.com/api/character/1')
    const json = await response.json()
    console.log(json?.name)
    document.getElementById('name').innerHTML = json?.name;
    document.getElementById('status').innerHTML = "Status:" + " " + json?.status;
    document.getElementById('species').innerHTML = "Species:" + " " + json?.species;
    document.getElementById('gender').innerHTML = "Gender:" + " " + json?.gender;
    document.getElementById('image').src = json?.image;
    console.log(json.image.value)
}
search()