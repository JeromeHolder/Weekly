$(document).ready(function(){
    let url = 'https://api.nasa.gov/planetary/apod?api_key=zzXTuoVupEPs1KsFG1LO8lFjytEy9XIPbT1Hru5G&date=2017-01-10';
    $.get(url, function(data){
        console.log(data);
        let imgUrl = data.hdurl;

        // using jquery, select the parent
        // and then call .append to add something inside
      // let imgHTML = '<img src="' + imgUrl + '" />';

        let imgHTML = `<img src=${imgUrl} />`;
        
        $('body').append(imgHTML);
    })
});