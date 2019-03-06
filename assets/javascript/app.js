var state = {
  locations: [],
  categories: [],
  subcategories: []
};

var question1 = {
  question: "What do you want to do?",
  answers: ["Relax", "Turn up", "Culture", "Something else"]
};
var question2 = {
  question: [
    "How do you want to relax?",
    "Ready to have fun?",
    "What kind of cultural event?",
    "Do you mean..?"
  ],
  answers: {
    activity1: [
      "Something in the nature",
      "Take me to the spa",
      "Maybe a drink but somewhere quiet",
      "Go to the movies"
    ],
    activity2: [
      "Wanna drink",
      "Wanna eat",
      "Some music would be nice",
      "I need a good laugh"
    ],
    activity3: [
      "Go to the theater",
      "Go to the museum",
      "Visit landmarks",
      "Go to a concert"
    ],
    activity4: [
      "Something with sports",
      "Do some thinking",
      "Have fun",
      "Looking for the thrill"
    ]
  }
};
var question3 = {
  activity1: {
    question: [
      "If you want to walk...",
      "What kind of spa treatment?",
      "What kind of bar?",
      "What kind of cinema?"
    ],
    answers: {
      prop_1: [
        "Central Park",
        "Go to the highline",
        "Go to the beach",
        "Brooklyn bridge"
      ],
      prop_2: ["Massage", "Mani/pedi", "Facial", "Day pass"],
      prop_3: ["Wine bar", "Cocktail bar", "Speak-easy", "Any kind"],
      prop_4: [
        "regular, nothing fancy",
        "reclining seats",
        "super fancy",
        "outdoor"
      ]
    }
  },

  activity2: {
    question: [
      "What kind of bar?",
      "What kind of food?",
      "When you say music, you mean...",
      "NY comedy everyone"
    ],
    answers: {
      prop_1: [
        "Cocktail bar",
        "Dive bar",
        "Sports bar",
        "Rooftop bar",
        "Speak-easy",
        "Pub",
        "Wine bar"
      ],
      prop_2: ["Mexican", "French", "American", "Asian"],
      prop_3: ["Big concert", "Small concert", "Clubbing", "Jazzy bar"],
      prop_4: ["Comedy show", "Expensive tickets", "Open mics", "TV show"]
    }
  },

  activity3: {
    question: [
      "What kind of theater?",
      "Museums vibe",
      "What kind of landmark?",
      "What kind of concert"
    ],
    answers: {
      prop_1: ["Ballet", "Opera", "Broadway", "Drama"],
      prop_2: ["Art", "History", "All for the gram", "A classic"],
      prop_3: ["Buildings", "Statue of liberty", "guided tour", "Bridges"],
      prop_4: ["Classic music", "Small concert", "Big concert", "Jazzy bar"]
    }
  },

  activity4: {
    question: [
      "What do you want to see?",
      "MASTERMINDS",
      "Not too much action",
      "Make me sweat"
    ],
    answers: {
      prop_1: ["Basketball", "Baseball", "American football", "Boxing"],
      prop_2: ["Escape game", "Scavenger hunt"],
      prop_3: ["Karaoke", "Lasergame", "Bowling", "Arcade"],
      prop_4: [
        "Axe throwing",
        "Indoor Skydiving",
        "Room where you break stuff",
        "Helicopter tour"
      ]
    }
  }
};

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
  secondQuestion();
}
function secondQuestion() {
  $(".answers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question2.question[0]);
      var activity1 = question2.answers.activity1;
      for (var j = 0; j < activity1.length; j++) {
        var activity1_answers = $("<p/>");
        activity1_answers.attr("data-index", [j]);
        activity1_answers.addClass("firstActAnswers");
        activity1_answers.text(activity1[j]);
        $("#answersDiv").append(activity1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question2.question[1]);
      var activity2 = question2.answers.activity2;
      for (var h = 0; h < activity2.length; h++) {
        var activity2_answers = $("<p/>");
        activity2_answers.attr("data-index", [h]);
        activity2_answers.addClass("secondActAnswers");
        activity2_answers.text(activity2[h]);
        $("#answersDiv").append(activity2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question2.question[2]);
      var activity3 = question2.answers.activity3;
      for (var k = 0; k < activity3.length; k++) {
        var activity3_answers = $("<p/>");
        activity3_answers.attr("data-index", [k]);
        activity3_answers.addClass("thirdActAnswers");
        activity3_answers.text(activity3[k]);
        $("#answersDiv").append(activity3_answers);
      }
    } else {
      $("#question").text(question2.question[3]);
      var activity4 = question2.answers.activity4;
      for (var l = 0; l < activity4.length; l++) {
        var activity4_answers = $("<p/>");
        activity4_answers.attr("data-index", [l]);
        activity4_answers.addClass("fourthActAnswers");
        activity4_answers.text(activity4[l]);
        $("#answersDiv").append(activity4_answers);
      }
    }
    thirdQuestions();
  });
}

function thirdQuestions() {
  $(".firstActAnswers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question3.activity1.question[0]);
      var prop1 = question3.activity1.answers.prop_1;
      for (var i = 0; i < prop1.length; i++) {
        var prop1_answers = $("<p/>");
        prop1_answers.attr("data-value", prop1[i]);
        prop1_answers.addClass("finalProp");
        prop1_answers.text(prop1[i]);
        $("#answersDiv").append(prop1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question3.activity1.question[1]);
      var prop2 = question3.activity1.answers.prop_2;
      for (var h = 0; h < prop2.length; h++) {
        var prop2_answers = $("<p/>");
        prop2_answers.attr("data-value", prop2[h]);
        prop2_answers.addClass("finalProp");
        prop2_answers.text(prop2[h]);
        $("#answersDiv").append(prop2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question3.activity1.question[2]);
      var prop3 = question3.activity1.answers.prop_3;
      for (var k = 0; k < prop3.length; k++) {
        var prop3_answers = $("<p/>");
        prop3_answers.attr("data-value", prop3[k]);
        prop3_answers.addClass("finalProp");
        prop3_answers.text(prop3[k]);
        $("#answersDiv").append(prop3_answers);
      }
    } else {
      $("#question").text(question3.activity1.question[3]);
      var prop4 = question3.activity1.answers.prop_4;
      for (var l = 0; l < prop4.length; l++) {
        var prop4_answers = $("<p/>");
        prop4_answers.attr("data-value", prop4[l]);
        prop4_answers.addClass("finalProp");
        prop4_answers.text(prop4[l]);
        $("#answersDiv").append(prop4_answers);
      }
    }
    callApi();
  });
  $(".secondActAnswers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question3.activity2.question[0]);
      var prop1 = question3.activity2.answers.prop_1;
      for (var i = 0; i < prop1.length; i++) {
        var prop1_answers = $("<p/>");
        prop1_answers.attr("data-value", prop1[i]);
        prop1_answers.addClass("finalProp");
        prop1_answers.text(prop1[i]);
        $("#answersDiv").append(prop1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question3.activity2.question[1]);
      var prop2 = question3.activity2.answers.prop_2;
      for (var h = 0; h < prop2.length; h++) {
        var prop2_answers = $("<p/>");
        prop2_answers.attr("data-value", prop2[h]);
        prop2_answers.addClass("foodProp");
        prop2_answers.text(prop2[h]);
        $("#answersDiv").append(prop2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question3.activity2.question[2]);
      var prop3 = question3.activity2.answers.prop_3;
      for (var k = 0; k < prop3.length; k++) {
        var prop3_answers = $("<p/>");
        prop3_answers.attr("data-value", prop3[k]);
        prop3_answers.addClass("finalProp");
        prop3_answers.text(prop3[k]);
        $("#answersDiv").append(prop3_answers);
      }
    } else {
      $("#question").text(question3.activity2.question[3]);
      var prop4 = question3.activity2.answers.prop_4;
      for (var l = 0; l < prop4.length; l++) {
        var prop4_answers = $("<p/>");
        prop4_answers.attr("data-value", prop4[l]);
        prop4_answers.addClass("finalProp");
        prop4_answers.text(prop4[l]);
        $("#answersDiv").append(prop4_answers);
      }
    }
    callApi();
  });
  $(".thirdActAnswers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question3.activity3.question[0]);
      var prop1 = question3.activity3.answers.prop_1;
      for (var i = 0; i < prop1.length; i++) {
        var prop1_answers = $("<p/>");
        prop1_answers.attr("data-value", prop1[i]);
        prop1_answers.addClass("finalProp");
        prop1_answers.text(prop1[i]);
        $("#answersDiv").append(prop1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question3.activity3.question[1]);
      var prop2 = question3.activity3.answers.prop_2;
      for (var h = 0; h < prop2.length; h++) {
        var prop2_answers = $("<p/>");
        prop2_answers.attr("data-value", prop2[h]);
        prop2_answers.addClass("finalProp");
        prop2_answers.text(prop2[h]);
        $("#answersDiv").append(prop2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question3.activity3.question[2]);
      var prop3 = question3.activity3.answers.prop_3;
      for (var k = 0; k < prop3.length; k++) {
        var prop3_answers = $("<p/>");
        prop3_answers.attr("data-value", prop3[k]);
        prop3_answers.addClass("finalProp");
        prop3_answers.text(prop3[k]);
        $("#answersDiv").append(prop3_answers);
      }
    } else {
      $("#question").text(question3.activity3.question[3]);
      var prop4 = question3.activity3.answers.prop_4;
      for (var l = 0; l < prop4.length; l++) {
        var prop4_answers = $("<p/>");
        prop4_answers.attr("data-value", prop4[l]);
        prop4_answers.addClass("finalProp");
        prop4_answers.text(prop4[l]);
        $("#answersDiv").append(prop4_answers);
      }
    }
    callApi();
  });
  $(".fourthActAnswers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question3.activity4.question[0]);
      var prop1 = question3.activity4.answers.prop_1;
      for (var i = 0; i < prop1.length; i++) {
        var prop1_answers = $("<p/>");
        prop1_answers.attr("data-value", prop1[i]);
        prop1_answers.addClass("finalProp");
        prop1_answers.text(prop1[i]);
        $("#answersDiv").append(prop1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question3.activity4.question[1]);
      var prop2 = question3.activity4.answers.prop_2;
      for (var h = 0; h < prop2.length; h++) {
        var prop2_answers = $("<p/>");
        prop2_answers.attr("data-value", prop2[h]);
        prop2_answers.addClass("finalProp");
        prop2_answers.text(prop2[h]);
        $("#answersDiv").append(prop2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question3.activity4.question[2]);
      var prop3 = question3.activity4.answers.prop_3;
      for (var k = 0; k < prop3.length; k++) {
        var prop3_answers = $("<p/>");
        prop3_answers.attr("data-value", prop3[k]);
        prop3_answers.addClass("finalProp");
        prop3_answers.text(prop3[k]);
        $("#answersDiv").append(prop3_answers);
      }
    } else {
      $("#question").text(question3.activity4.question[3]);
      var prop4 = question3.activity4.answers.prop_4;
      for (var l = 0; l < prop4.length; l++) {
        var prop4_answers = $("<p/>");
        prop4_answers.attr("data-value", prop4[l]);
        prop4_answers.addClass("finalProp");
        prop4_answers.text(prop4[l]);
        $("#answersDiv").append(prop4_answers);
      }
    }
    callApi();
  });
}

function callApi() {
  $(".finalProp").on("click", function(event) {
    $("#apiDiv").empty();
    console.log("You clicked");
    secondAnswer = event.currentTarget.dataset.value;
    console.log(secondAnswer);
    if (secondAnswer === "Central Park") {
      eventbriteApi(3002);
    } else if (secondAnswer === "Walk") {
      eventbriteApi();
    } else if (secondAnswer === "Museum") {
      eventbriteApi();
    } else {
      eventbriteApi();
    }
  });
  $(".foodProp").on("click", function(event) {
    finalAnswer = event.currentTarget.dataset.value;
    zomatoApi(finalAnswer);
  });
}

function eventbriteApi(q) {
  // var queryURL =
  //   "https://www.eventbriteapi.com/v3/events/search/?categories=103";
  const instance = axios.create({
    headers: {
      get: {
        Authorization: "Bearer XES5FUKPHLCMR7UUVVUA"
      }
    }
  });

  instance
    .get(
      "https://www.eventbriteapi.com/v3/events/search/?subcategories=" +
        q +
        "&location.address=newyork"
    )

    .then(function(result) {
      console.log(result.data);
      var results = result.data;
      console.log(results.events[0].url);
      console.log(results.length);
      // var filtered = results.events.filter(function(event) {
      //   if (event.end.timezone === "America/New_York") {
      //     return true;
      //   }
      // });
      // console.log(filtered);
      for (var i = 0; i < 4; i++) {
        var mainDiv = $("<div>");
        mainDiv.addClass("col-md-3");
        console.log(results.events[i].url);
        var a = $("<h4>");
        a.text(results.events[i].name.text);
        $(mainDiv).append(a);

        var articleImg = $("<img>");
        articleImg.attr("src", results.events[i].logo.original.url);
        articleImg.attr("class", "card-img-top");
        $(mainDiv).append(articleImg);
        $("#apiDiv").append(mainDiv);

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

function zomatoApi(r) {
  fetch(
    "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=" +
      r,
    {
      headers: {
        "user-key": "504af04e6861c274d55e91c18d40ac0d"
      }
    }
  )
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var restaurants = data.restaurants;
      for (var i = 0; i < 4; i++) {
        console.log(restaurants[0].restaurant.name);
        console.log(restaurants[0].restaurant.events_url);
        console.log(restaurants[0].restaurant.average_cost_for_two);
        console.log(restaurants[0].restaurant.location.locality);

        var mainDiv = $("<div>");
        mainDiv.addClass("col-md-3");
        var restName = $("<h4>");
        restName.text(restaurants[i].restaurant.name);
        $(mainDiv).append(restName);

        var restImg = $("<img>");
        restImg.attr("src", restaurants[i].restaurant.featured_image);
        restImg.attr("class", "card-img-top");
        $(mainDiv).append(restImg);

        var restLocation = $("<p>");
        restLocation.text(restaurants[i].restaurant.location.locality);
        $(mainDiv).append(restLocation);

        var restPrice = $("<p>");
        restPrice.text(
          "Average cost for 2: $" +
            restaurants[i].restaurant.average_cost_for_two
        );
        $(mainDiv).append(restPrice);

        var restUrl = $("<button>");
        restUrl.addClass("btn btn-outline-info");
        restUrl.addClass("moreInfo");
        restUrl.text("More Info!");
        $(mainDiv).append(restUrl);
        $(".moreInfo").on("click", function() {
          window.location = restaurants[i].restaurant.events_url;
        });

        $("#apiDiv").append(mainDiv);
      }
    });
}

$("#restart").on("click", function(event) {
  $("#apiDiv").empty();
  $("#answersDiv").empty();
  $("#question").empty();
  startQuestionnaire();
});
