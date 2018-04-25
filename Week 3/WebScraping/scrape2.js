const request = require('request');
const cheerio = require('cheerio');
const url = "https://www.google.ca/search?q=arrival" + "movie" + "news";

request(url, function(error, response, body) {
    let totalResults = 0;
    if(error) {
        console.log("Couldn't get page because of error: " + error);
        return;
    }

    var $ = cheerio.load(body),
        hline = $(".r a");
    
    hline.each(function (i, hline) {
        var title = $(hline).text();
        console.log(title);
    })
})