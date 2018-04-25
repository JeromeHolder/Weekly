

$.get("https://reqres.in/api/users?page=2?foo=bar&another=something", function(data) {
    $(".container").html(JSON.stringify(data));
    console.log("retrieved data");
    // console.log(data);
  });