
var config = {
	apiKey: "AIzaSyD4Y5YtEbnB4aJuGLZAAWRnB7EomhTOeUI",
	authDomain: "project1-ffd4b.firebaseapp.com",
	databaseURL: "https://project1-ffd4b.firebaseio.com",
	projectId: "project1-ffd4b",
	storageBucket: "project1-ffd4b.appspot.com",
	messagingSenderId: "528726812532"
};

firebase.initializeApp(config);

var user = firebase.auth().currentUser;

  if (user) {
    // User is signed in.
    $("#explore").show();
    $("#create").hide();
    console.log("You are signed in!");
  } else {
    // No user is signed in.
    $("#explore").hide();
    $("#create").show();
    console.log("You are not signed in!");
  };

function login(){
  var username = $("#email").val();
  var password = $("#password").val();

  firebase.auth().SignInWithEmailAndPassword(username, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    alert("Error: "+ errorMessage);

  });
  
  

}

