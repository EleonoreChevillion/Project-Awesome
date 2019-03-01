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

// function startQuestion() {
//     $(".question").text(question1.question);

// }