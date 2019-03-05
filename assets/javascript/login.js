$(".sing-in").click(function(e) {
	var button = $(this);

	if (button.hasClass("button-transparent")) {
		e.preventDefault();
		$(".floating-content").addClass("active");
		$(".sing-in-panel").addClass("active");
		$(".sing-up-panel").removeClass("active");
	}

});

$(".sing-up").click(function(e) {
	var button = $(this);

	if (button.hasClass("button-transparent")) {
		e.preventDefault();
		$(".floating-content").removeClass("active");
		$(".sing-in-panel").removeClass("active");
		$(".sing-up-panel").addClass("active");
	}

});

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

  function Redirect() {
    window.location.href = "questionnaire.html";
 }