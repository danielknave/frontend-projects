function search() {
    let input = document.forms['ip-form']['ip-input'].value;
    if (!validate(input)) {
        alert('Incorrect IP');
        return;
    }  
    const api_key = "";
    const regionalNamesInEnglish = new Intl.DisplayNames(['en'], {type: 'region'});
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: input},
        success: function(data) {
            document.querySelector('#ip .contents').innerText = input;

            let locationElement = document.querySelector('#location .contents');
            let locationText = data.location.city + ', ' + data.location.region + ', ' + regionalNamesInEnglish.of(data.location.country);
            locationElement.innerText = locationText

            let timezoneElement = document.querySelector('#timezone .contents');
            timezoneElement.innerText = 'UTC ' + data.location.timezone;

            let ISPElement = document.querySelector('#isp .contents');
            ISPElement.innerText = data.isp;

            draw(locationText, data.location.lat, data.location.lng);
        }
    })
}

function draw(
    loc = 'Rosemead, California, United States',
    x = 34.08057, 
    y = -118.07285, 
    z = 13) 
    {

    let containter = L.DomUtil.get('map');
    if (containter != null) {
        containter._leaflet_id = null;
    }
    let map = L.map('map').setView([x, y], z);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    let customIcon = L.icon ({
        iconUrl: 'images/icon-location.svg',
        iconSize: [38, 45],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });
    const marker = L.marker([x, y], {icon: customIcon}).addTo(map)
        .bindPopup('<b>' + loc + '</b>').openPopup();
}

function validate(input) {
    const regex = new RegExp(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
    return regex.test(input);
}

