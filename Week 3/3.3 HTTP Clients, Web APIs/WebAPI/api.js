

$(document).ready(function() {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=9sHkbxsFKKIgTz5CDaxEXYZpZH91vu1HagVkunv9&date=2017-11-20';
    $.get(url, function(data) {
        $('.spaceImg').attr('src', data.hdurl);
    });
})