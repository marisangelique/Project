// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.

$(document).ready(function () {
  $('#search-term').click(function (event) {
      event.preventDefault();
      var searchTerm = $('#query').val();
      getRequest(searchTerm);
  });
});

function getRequest(searchTerm) {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
      part: 'snippet',
      key: 'AIzaSyAoZdGHDSgIvaoXjtcRvVxnEsR5nIU62_A',
      q: searchTerm
  };

  $.getJSON(url, params, showResults);
}

function showResults(results) {
  var html = "";
  var entries = results.items;
  console.log (entries)
  for(i=0; i<entries.length;i++){
    var currentVideo = entries[i]
    $("#search-results").append(`<div>
    <iframe
    width='560'
    height='315'
    src='https://www.youtube.com/embed/${currentVideo.id.videoId}'
    frameborder='0'
    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
  ></iframe> </div>`)
  }
 
}