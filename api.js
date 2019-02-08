var config = {
	apiKey: "AIzaSyD4Y5YtEbnB4aJuGLZAAWRnB7EomhTOeUI",
	authDomain: "project1-ffd4b.firebaseapp.com",
	databaseURL: "https://project1-ffd4b.firebaseio.com",
	projectId: "project1-ffd4b",
	storageBucket: "project1-ffd4b.appspot.com",
	messagingSenderId: "528726812532"
};
			
firebase.initializeApp(config);


var database = firebase.database();



function login(){
  event.preventDefault();
  var username = $("#email").val();
  var password = $("#password").val();
  console.log(password);

  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.errorCode;
    var errorMessage = error.errorMessage;
     
  
    alert("Error: "+ errorMessage);
  });


}

firebase.auth().onAuthStateChanged(function(user) {


  if(user){
    $("#logIn").hide();
    $("#loggedIn").show();
    console.log("You are logged in!");
  } else{
    $("#loggedIn").hide();
    $("#logIn").show();

    console.log("You are not logged in!")
  }
});