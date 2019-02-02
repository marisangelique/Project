var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=c77e87e4e147383102f0bac0a30765d2";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });