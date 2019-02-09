// Firebase 
var config = {
	apiKey: "AIzaSyCa2AVuRCPIQc1cysRp5FN5aBr9lP8WSJw",
	authDomain: "project1-ffd4b.firebaseapp.com",
	databaseURL: "https://project1-ffd4b.firebaseio.com",
	projectId: "project1-ffd4b",
	storageBucket: "project1-ffd4b.appspot.com",
	messagingSenderId: "528726812532"
};

firebase.initializeApp(config);

var user = firebase.auth().currentUser;

  firebase.auth().onAuthStateChanged(function(user) {
      if(user){
      $("#explore").show();
      $("#create").hide();
    console.log("You are signed in!");
  } else {
    // No user is signed in.
    $("#explore").hide();
    $("#create").show();
    console.log("You are not signed in!");
  }
  });

function login(){
  var username = $("#email").val();
  var password = $("#password").val();

  console.log(username, password);

  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    alert("Error: "+ errorMessage);

  });

}

function logout(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}
$('#showFlights').click(function (event) {
  $("#booking").hide();
  $("#results").show();
});
//   event.preventDefault();
//   var firstDay = $("#firstDay").val();
//   var lastDay = $("#lastDay").val();
//   getRequest(searchTerm);
// });
// Open Sky Api

    $('#availability').click(function (event) {
        $("#bookingHotel").hide();
        $("#reservation").show();
        event.preventDefault();
    });
  

// function getRequest(searchTerm) {
  
//   var flight = $("#startPoint");
//   var beginTime = moment(firstDay).unix();
//   var endTime = moment(lastDay).unix();

//   var queryURL = 'https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport='+ flight + '&begin=' + beginTime + '&end=' + endTime;
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }). then(function(response){
    
//   })
// }
