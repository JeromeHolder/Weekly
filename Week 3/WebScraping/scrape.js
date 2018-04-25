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
        links = $(".r a");
    
    links.each(function (i, link) {
        var url = $(link).attr("href");

        url = url.replace('/url?q=', '').split("&")[0];

        if(url.charAt(0) === "/") {
            return;
        }
        // console.log(url);
        totalResults++;
        
        request(url, function (error, response, body) {
            // load the page into Cheerio
            var $page = cheerio.load(body),
            text = $page("body").text();
            text = text.replace(/\s+/g, " ").replace(/[^a-zA-Z ]/g, "").toLowerCase();
            console.log(text);
        })
    })
    // console.log(totalResults);
    // console.log(url);
})