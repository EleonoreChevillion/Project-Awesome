<<<<<<< HEAD
var app_fireBase = {};
=======
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
>>>>>>> 88b57b4c5f86e88e87cc28fccc21bb8c2ef7e5a1

// (function(){
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

<<<<<<< HEAD
app_fireBase = firebase;
// })()

//write function that grabs user keystrokes
//holds them in variable
//

// function logInUser() {
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "index.html",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: "index.html",
  // Privacy policy url.
  privacyPolicyUrl: "index.html"
};
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);
// });

//On state function

var mainApp = {};

(function() {
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user && !window.location.href.includes("login.html")) {
      // User  is signed in.
      $("#logout").show();
    } else if (!window.location.href.includes("login.html")) {
      window.location.replace("login.html");
      $("#logout").hide();
    }
  });
=======
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
>>>>>>> 88b57b4c5f86e88e87cc28fccc21bb8c2ef7e5a1

  mainApp.logOut = logOut;
})();
function logOut() {
  firebase.auth().signOut();
  window.location.replace("login.html");
  console.log("I AM FUCKING WORKING!");
}
<<<<<<< HEAD

$("#logout").on("Click", logOut);
=======
$("#login").on("click", function() {
  window.location = href = "././postlogin.html";
});

>>>>>>> 88b57b4c5f86e88e87cc28fccc21bb8c2ef7e5a1
