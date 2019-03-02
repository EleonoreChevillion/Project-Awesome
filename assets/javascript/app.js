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
      relaxAnswers.attr("data-value", relax[j]);
      relaxAnswers.addClass("secondAnswers");
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
  callApi();
});
function callApi() {
  $(".secondAnswers").on("click", function(event) {
    console.log("You clicked");
    secondAnswer = event.currentTarget.dataset.value;
    console.log(secondAnswer);
    if (secondAnswer === "Massage") {
      eventbriteApi();
    } else if (secondAnswer === "Walk") {
      eventbriteApi();
    } else if (secondAnswer === "Museum") {
      eventbriteApi();
    } else {
      eventbriteApi();
    }
  });
}
function eventbriteApi() {
  var queryURL =
    "https://www.eventbriteapi.com/v3/events/search/?categories=103";
  const instance = axios.create({
    headers: {
      get: {
        Authorization: "Bearer XES5FUKPHLCMR7UUVVUA"
      }
    }
  });

  instance
    .get("https://www.eventbriteapi.com/v3/events/search/?categories=103")
    .then(function(result) {
      console.log(result.data);
      var results = result.data;
      console.log(results.events[0].url);

      for (var i = 0; i < 5; i++) {
        var mainDiv = $("<div>");
        mainDiv.addClass("col-md-4");
        console.log(results.events[i].url);
        var a = $("<h4>");
        a.text(results.events[i].name.text);
        $(mainDiv).append(a);

        var articleImg = $("<img>");
        articleImg.attr("src", results.events[i].logo.original.url);
        articleImg.attr("class", "card-img-top");
        $(mainDiv).append(articleImg);
        $("#tryDiv").append(mainDiv);

        var c = $("<button>");
        c.addClass("btn btn-outline-info");
        c.addClass("moreInfo");
        c.text("Get me tickets!");
        $(mainDiv).append(c);
        $(".moreInfo").on("click", function() {
          window.location = results.events[i].url;
        });
      }
    });
}

function zomatoApi() {
  function getData(searchEntry, callback, pageNumber) {
    $.ajax({
      url: "https://developers.zomato.com/api/v2.1/categories",
      type: "GET",
      dataType: "json",
      headers: { "user-key": "a9ad92c350c1f901a00604156e7979f5" }
    })
      .done(function(data) {
        console.log(data);
      })
      .fail(function(data) {
        console.log(data.pagination);
      });
  }
}

// $("#try").on("click", function() {
//   var queryURL =
//     "https://www.eventbriteapi.com/v3/categories/?token=XES5FUKPHLCMR7UUVVUA";

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })

//     //After data comes back about the request
//     .then(function(response) {
//       var categories = response.categories;
//       var mainDiv = $("<div>");
//       for (var i = 0; i < 7; i++) {
//         console.log(categories[i].name);
//         var a = $("<h4>");
//         a.text(categories[i].name);
//         $(mainDiv).append(a);
//         $("#tryDiv").append(mainDiv);
//         //   var mainDiv = $("<div>");
//         //   var a = $("<h4>");
//         //   a.text(results[i].headline.print_headline);
//         //   $(mainDiv).append(a);
//         //   $("#tryDiv").append(mainDiv);
//       }
//     });
//   //     function searchResult() {
//   //         event.preventDefault();
//   //         //$("#article-div").empty;
//   //         var queryURL =
//   //           "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
//   //            +
//   //           "&api-key=4pGrPZuacORWCsNMIlizLiGqgm3JkWqY";
//   //         console.log(queryURL);
//   //         $.ajax({
//   //           url: queryURL,
//   //           method: "GET"
//   //         }).then(function(data) {
//   //           var results = something;
//   //           $("#tryDiv").empty();
//   //           for (var i = 0; i < 7; i++) {
//   //             var mainDiv = $("<div>");
//   //             var a = $("<h4>");
//   //             a.text(results[i].headline.print_headline);
//   //             $(mainDiv).append(a);
//   //             $("#tryDiv").append(mainDiv);
//   //           }
//   //         });
// });

// curl -X GET --header "Accept: application/json" --header "user-key: 504af04e6861c274d55e91c18d40ac0d" "https://developers.zomato.com/api/v2.1/cuisines?city_id=280"

// fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=280", {
//   headers: {
//     "user-key": "504af04e6861c274d55e91c18d40ac0d"
//   }
// })
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     var cuisines = data.cuisines;
//     cuisines.forEach(function(blqhqblq) {
//       console.log(cuisine.cuisine.cuisine_name);
//     });
//   });

// axios
//Evenbrite API
// var queryURL =
//   "https://www.eventbriteapi.com/v3/categories/?token=XES5FUKPHLCMR7UUVVUA";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// })

//   //After data comes back about the request
//   .then(function(response) {
//     console.log(queryURL);
//     console.log(response);
//   });

//Zomato API

// function getData(searchEntry, callback, pageNumber) {
//   $.ajax({
//     url: "https://developers.zomato.com/api/v2.1/categories",
//     type: "GET",
//     dataType: "json",
//     headers: { "user-key": "a9ad92c350c1f901a00604156e7979f5" }
//   })
//     .done(function(data) {
//       console.log(data);
//     })
//     .fail(function(data) {
//       console.log(data.pagination);
//     });
// }
// function getData(searchEntry, callback, pageNumber) {
//   $.ajax({
//     url: "https://developers.zomato.com/api/v2.1/categories",
//     type: "GET",
//     dataType: "json",
//     headers: { "user-key": "a9ad92c350c1f901a00604156e7979f5" }
//   })
//     .done(function(data) {
//       console.log(data);
//     })
//     .fail(function(data) {
//       console.log(data.pagination);
//     });
// }
