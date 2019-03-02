var question1 = {
  question: "What do you want to do",
  answers: ["Relax", "Eat", "Get drunk", "Something weird"]
};
var question2 = {
  possibleQuestions: [
    "How do you want to relax",
    "What kind of food",
    "What sort of bar",
    "Physical or not"
  ],
  possibleAnswers: {
    answers1: ["Massage", "Walk", "Museum", "Coffee"],
    answers2: ["Spicy", "European", "American", "Asian"],
    answers3: ["Dive bar", "Cocktail bar", "Wine bar", "Sports bar"],
    answers4: ["Blow off some steam", "Mind tricks", "Comedy", "Surprise me"]
  }
};
var selectedAnswer = null;
startQuestionnaire();
function startQuestionnaire() {
  $("#question").text(question1.question);
  var firstQuestion = question1.answers;
  for (var i = 0; i < firstQuestion.length; i++) {
    var answersDisplay = $("<p/>");
    answersDisplay.attr("data-index", [i]);
    answersDisplay.text(firstQuestion[i]);
    answersDisplay.addClass("answers");
    $("#answersDiv").append(answersDisplay);
  }
}

$(".answers").on("click", function(event) {
  $("#answersDiv").empty();
  selectedAnswer = parseInt(event.currentTarget.dataset.index);
  if (selectedAnswer === 0) {
    $("#question").text(question2.possibleQuestions[0]);
    var relax = question2.possibleAnswers.answers1;
    for (var j = 0; j < relax.length; j++) {
      var relaxAnswers = $("<p/>");
      relaxAnswers.text(relax[j]);
      $("#answersDiv").append(relaxAnswers);
    }
  } else if (selectedAnswer === 1) {
    $("#question").text(question2.possibleQuestions[1]);
    var eat = question2.possibleAnswers.answers2;
    for (var h = 0; h < eat.length; h++) {
      var eatAnswers = $("<p/>");
      eatAnswers.text(eat[h]);
      $("#answersDiv").append(eatAnswers);
    }
  } else if (selectedAnswer === 2) {
    $("#question").text(question2.possibleQuestions[2]);
    var drunk = question2.possibleAnswers.answers3;
    for (var k = 0; k < drunk.length; k++) {
      var drunkAnswers = $("<p/>");
      drunkAnswers.text(drunk[k]);
      $("#answersDiv").append(drunkAnswers);
    }
  } else {
    $("#question").text(question2.possibleQuestions[3]);
    var weird = question2.possibleAnswers.answers4;
    for (var l = 0; l < weird.length; l++) {
      var weirdAnswers = $("<p/>");
      weirdAnswers.text(weird[l]);
      $("#answersDiv").append(weirdAnswers);
    }
  }
});
//Evenbrite API
var queryURL =
  "https://www.eventbriteapi.com/v3/categories/?token=XES5FUKPHLCMR7UUVVUA";

$.ajax({
  url: queryURL,
  method: "GET"
})

  //After data comes back about the request
  .then(function(response) {
    console.log(queryURL);
    console.log(response);
  });

  //Zomato API

  function getData(searchEntry, callback, pageNumber) {
    $.ajax({
      url: 'https://developers.zomato.com/api/v2.1/categories',
      type: "GET",
      dataType: "json",
      headers: {'user-key':'a9ad92c350c1f901a00604156e7979f5'}
      })
      .done(function(data) {
        console.log(data);
      })
      .fail(function(data) {
        console.log(data.pagination)
    });
  };
  