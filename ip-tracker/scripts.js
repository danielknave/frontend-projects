function search() {
    let input = document.forms['ip-form']['ip-input'].value;
    if (!validate(input)) {
        alert('Incorrect IP');
        return;
    }  
    const api_key = "at_Of04vvlo6VltwEQxf6PstIKx8OPF0";
    const regionalNamesInEnglish = new Intl.DisplayNames(['en'], {type: 'region'});
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: input},
        success: function(data) {
            document.querySelector('#ip .contents').innerText = input;

            let locationElement = document.querySelector('#location .contents');
            locationElement.innerText = data.location.city + ', ' + data.location.region + ', ' + regionalNamesInEnglish.of(data.location.country);

            let timezoneElement = document.querySelector('#timezone .contents');
            timezoneElement.innerText = 'UTC ' + data.location.timezone;

            let ISPElement = document.querySelector('#isp .contents');
            ISPElement.innerText = data.isp;
        }
    })
}

function validate(input) {
    const regex = new RegExp(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
    return regex.test(input);
}

