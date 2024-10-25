async function getData(latitude, longitude) {
    var latitude = latitude
    var longitude = longitude
    const apiData = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then((res) => res.json())

    return (apiData.locality)

}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}


async function createMap() {


    var map = L.map('map').setView([40.45, -101.36], 4);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var latitude = getRandomInRange(30, 35, 3);
    var longitude = getRandomInRange(-90, -100, 3);
    document.getElementById("markerOne").innerHTML = (`Marker 1: Latitude: ${latitude}, Longitude: ${longitude}`)
    var markerOne = L.marker([latitude, longitude]).addTo(map);
    const apiData1 = await getData(latitude, longitude)
    console.log(apiData1)
    document.getElementById("localityOne").innerHTML = (`Locality: ${apiData1}`)

    latitude = getRandomInRange(30, 35, 3);
    longitude = getRandomInRange(-90, -100, 3);
    document.getElementById("markerTwo").innerHTML = (`Marker 2: Latitude: ${latitude}, Longitude: ${longitude}`)
    var markerTwo = L.marker([latitude, longitude]).addTo(map);
    const apiData2 = await getData(latitude, longitude)
    console.log(apiData2)
    document.getElementById("localityTwo").innerHTML = (`Locality: ${apiData2}`)



    latitude = getRandomInRange(30, 35, 3);
    longitude = getRandomInRange(-90, -100, 3);
    document.getElementById("markerThree").innerHTML = (`Marker 3: Latitude: ${latitude}, Longitude: ${longitude}`)
    var markerThree = L.marker([latitude, longitude]).addTo(map);
    const apiData3 = await getData(latitude,longitude)
    console.log(apiData3)
    document.getElementById("localityThree").innerHTML = (`Locality: ${apiData3}`)

}


window.onload = createMap()