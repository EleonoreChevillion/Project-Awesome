$(".sign-in").click(function(e) {
	var button = $(this);

	if (button.hasClass("button-transparent")) {
		e.preventDefault();
		$(".floating-content").addClass("active");
		$(".sign-in-panel").addClass("active");
		$(".sign-up-panel").removeClass("active");
	}

});

$(".sign-up").click(function(e) {
	var button = $(this);

	if (button.hasClass("button-transparent")) {
		e.preventDefault();
		$(".floating-content").removeClass("active");
		$(".sign-in-panel").removeClass("active");
		$(".sign-up-panel").addClass("active");
	}

});

//log in function

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    // document.getElementById("user-div").style.display = "block";
    // document.getElementById("login-div").style.display = "none";

    var user = firebase.auth().currentUser;
    if(user != null){

      let email_id = user.email;
      let email_verified = user.emailVerified;

      // document.getElementById("user-paragraph").innerHTML = "Welcome User : " +email_id;
    }
  } else {
    // No user is signed in.
    // document.getElementById("user-div").style.display = "none";
    // document.getElementById("login-div").style.display = "block";
  }
});

function login(){
  // window.alert(userEmail + "You have logged in" + userPassword);
  let userEmail = document.getElementById("name").value;
  let userPassword = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });
Redirect();
}
//create an account aka register
function create_account(){
  let userEmail = document.getElementById("req_email").value;
  let userPassword = document.getElementById("req_password").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    // ...
  });
Redirect();

}
//email verification

function send_verification(){

  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });

}

//logout function

function logout(){
  firebase.auth().signOut()
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCJPmR2V6_XlC7y5dKsKlDZQU2PRICNBrk",
  authDomain: "project-awesome-jaeje.firebaseapp.com",
  databaseURL: "https://project-awesome-jaeje.firebaseio.com",
  projectId: "project-awesome-jaeje",
  storageBucket: "project-awesome-jaeje.appspot.com",
  messagingSenderId: "741517517090"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  console.log("USER STATUS CHANGED " + user);
  if (user) {
    // User is signed in.
    //   var displayName = user.displayName;
    //   var email = user.email;
    //   var emailVerified = user.emailVerified;
    //   var photoURL = user.photoURL;
    //   var isAnonymous = user.isAnonymous;
    //   var uid = user.uid;
    //   var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
    apiKey: "AIzaSyCJPmR2V6_XlC7y5dKsKlDZQU2PRICNBrk",
    authDomain: "project-awesome-jaeje.firebaseapp.com",
    databaseURL: "https://project-awesome-jaeje.firebaseio.com",
    projectId: "project-awesome-jaeje",
    storageBucket: "project-awesome-jaeje.appspot.com",
    messagingSenderId: "741517517090"
  };
  firebase.initializeApp(config);

  // firebase.auth().onAuthStateChanged(function(user) {
  //     console.log("USER STATUS CHANGED " + user);
  //   if (user) {
  //     // User is signed in.
  //   //   var displayName = user.displayName;
  //   //   var email = user.email;
  //   //   var emailVerified = user.emailVerified;
  //   //   var photoURL = user.photoURL;
  //   //   var isAnonymous = user.isAnonymous;
  //   //   var uid = user.uid;
  //   //   var providerData = user.providerData;
  //     // ...
  //   } else {
  //     // User is signed out.
  //     // ...
  //   }
  // });

function Redirect() {
  window.location.href = "questionnaire.html";
}
$("#login").on("click", function() {
  window.location = href = "././postlogin.html";
});

