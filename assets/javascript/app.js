var question1 = {
  question: "What do you want to do?",
  answers: ["Relax", "Turn up", "Culture", "Please feed me"]
};
var question2 = {
  question: [
    "How do you want to relax?",
    "How do you want to get turnt?",
    "How do you want to get artsy? ",
    "What are you craving?"
  ],
  answers: {
    activity1: [
      "I’m outdoorsy",
      "I like to do something on my own",
      "Music Helps Me Relax",
      "I need some serious R&R"
    ],
    activity2: [
      "Dance it out",
      "Game Time",
      "Jam Sesh",
      "I Like To Turnt Out of My Comfort Zone"
    ],
    activity3: [
      "Sound off!",
      "Visually Appealing ",
      "I want to participate ",
      "Take Me to The Theatre!"
    ],
    activity4: [
      "More spice in my life",
      "Fatten me up",
      "Bonjour Hola Ciao",
      "I will need chopsticks for that one"
    ]
  }
};
var question3 = {
  activity1: {
    question: [
      "You want outdoor? I will give you outdoor",
      "Hello Me time",
      "What's your vibe'?",
      "Proper Chillax?"
    ],
    answers: {
      prop_1: [
        "Adventure!",
        "Take me to the water",
        "I’m basically Spiderman",
        "Let’s jump ship"
      ],
      prop_2: [
        "Open up a book",
        "Look at pretty pictures",
        "Controlla",
        "Primping"
      ],
      prop_3: ["Classical", "Feelin jazzy", "Folk", "Reggae"],
      prop_4: ["Spa", "Yoga", "Surprise me"]
    }
  },

  activity2: {
    question: [
      "PARTY TIME",
      "What kind of sweaty people do you want to watch?",
      "When you say music, you mean...",
      "Interested in..."
    ],
    answers: {
      prop_1: ["RAVE", "Slap the bag", "Headbang", "SHOTS!"],
      prop_2: ["Slam Dunk", "Slap Shot", "Homerun", "Touchdown"],
      prop_3: [
        "Literally Jammin",
        "Alt Nation",
        "Don’t Stop Make It Pop",
        "Kanye All Day"
      ],
      prop_4: ["Loki super fun", "Cheesin", "NSFW", "Let’s fight about it"]
    }
  },

  activity3: {
    question: [
      "Classy activities for classy bitches",
      "Sit down and watch",
      "What do you want to do?",
      "Theater time!"
    ],
    answers: {
      prop_1: [
        "Hold that note",
        "Where are the words?",
        "Seriously, where are the words?",
        "Mamma Mia!"
      ],
      prop_2: [
        "Luke, I am Your Father.",
        "Epix & Chill",
        "Black Swan",
        "I need a laugh"
      ],
      prop_3: ["Let’s jump ship", "Nerdin out", "DIY", "1337"],
      prop_4: [
        "The theatre has my heart",
        "Mamma Mia!",
        "I need a laugh",
        "I like to move it move it"
      ]
    }
  },

  activity4: {
    question: [
      "Okay but what kind of burning feeling?",
      "Fat salty anything greasy",
      "Welcome to Europe!",
      "Cray delicious Asian"
    ],
    answers: {
      prop_1: ["Indian", "Mexican", "Moroccan", "Thai", "Caribbean"],
      prop_2: ["American", "Soul food", "BBQ", "Fast food", "Pizza", "Tex-Mex"],
      prop_3: [
        "French",
        "Italian",
        "Spanish",
        "German",
        "British",
        "Fondue",
        "Eastern European"
      ],
      prop_4: [
        "Chinese",
        "Thai",
        "Japanese",
        "Dim Sum",
        "Korean",
        "Ramen",
        "Vietnamese"
      ]
    }
  }
};

startQuestionnaire();
//STYLING//
// All answers elements have a class of answers
// The questions are all appended to the element with id question
// All questions are paragraphs but can definetly be changed to another element

$("#home").on("click", function() {
  window.location = href = "././postlogin.html";
});

//first level of questions, does not append things to apiDiv
function startQuestionnaire() {
  $("#restart").css("display", "none");
  $("#more").css("display", "none");
  $("#question").text(question1.question);
  var firstQuestion = question1.answers;
  for (var i = 0; i < firstQuestion.length; i++) {
    var answersDisplay = $("<p/>");
    answersDisplay.attr("data-index", [i]);
    answersDisplay.text(firstQuestion[i]);
    answersDisplay.addClass("startAnswers answers");
    $("#answersDiv").append(answersDisplay);
  }
  secondQuestion();
}

//second level of questions, does not append things to apiDiv
function secondQuestion() {
  $(".startAnswers").on("click", function(event) {
    $("#more").css("display", "none");
    $("#restart").css("display", "flex");
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question2.question[0]);
      var activity1 = question2.answers.activity1;
      for (var j = 0; j < activity1.length; j++) {
        var activity1_answers = $("<p/>");
        activity1_answers.attr("data-index", [j]);
        activity1_answers.addClass("firstActAnswers answers");
        activity1_answers.text(activity1[j]);
        $("#answersDiv").append(activity1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question2.question[1]);
      var activity2 = question2.answers.activity2;
      for (var h = 0; h < activity2.length; h++) {
        var activity2_answers = $("<p/>");
        activity2_answers.attr("data-index", [h]);
        activity2_answers.addClass("secondActAnswers answers");
        activity2_answers.text(activity2[h]);
        $("#answersDiv").append(activity2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question2.question[2]);
      var activity3 = question2.answers.activity3;
      for (var k = 0; k < activity3.length; k++) {
        var activity3_answers = $("<p/>");
        activity3_answers.attr("data-index", [k]);
        activity3_answers.addClass("thirdActAnswers answers");
        activity3_answers.text(activity3[k]);
        $("#answersDiv").append(activity3_answers);
      }
    } else {
      $("#question").text(question2.question[3]);
      var activity4 = question2.answers.activity4;
      for (var l = 0; l < activity4.length; l++) {
        var activity4_answers = $("<p/>");
        activity4_answers.attr("data-index", [l]);
        activity4_answers.addClass("fourthActAnswers answers");
        activity4_answers.text(activity4[l]);
        $("#answersDiv").append(activity4_answers);
      }
    }
    thirdQuestions();
  });
}

//second level of questions, does not append things to apiDiv
function thirdQuestions() {
  //first set of questions that append to tryDiv
  $(".firstActAnswers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question3.activity1.question[0]);
      var prop1 = question3.activity1.answers.prop_1;
      for (var i = 0; i < prop1.length; i++) {
        var prop1_answers = $("<p/>");
        prop1_answers.attr("data-value", prop1[i]);
        prop1_answers.addClass("finalProp answers");
        prop1_answers.text(prop1[i]);
        $("#answersDiv").append(prop1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question3.activity1.question[1]);
      var prop2 = question3.activity1.answers.prop_2;
      for (var h = 0; h < prop2.length; h++) {
        var prop2_answers = $("<p/>");
        prop2_answers.attr("data-value", prop2[h]);
        prop2_answers.addClass("finalProp answers");
        prop2_answers.text(prop2[h]);
        $("#answersDiv").append(prop2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question3.activity1.question[2]);
      var prop3 = question3.activity1.answers.prop_3;
      for (var k = 0; k < prop3.length; k++) {
        var prop3_answers = $("<p/>");
        prop3_answers.attr("data-value", prop3[k]);
        prop3_answers.addClass("finalProp answers");
        prop3_answers.text(prop3[k]);
        $("#answersDiv").append(prop3_answers);
      }
    } else {
      $("#question").text(question3.activity1.question[3]);
      var prop4 = question3.activity1.answers.prop_4;
      for (var l = 0; l < prop4.length; l++) {
        var prop4_answers = $("<p/>");
        prop4_answers.attr("data-value", prop4[l]);
        prop4_answers.addClass("finalProp answers");
        prop4_answers.text(prop4[l]);
        $("#answersDiv").append(prop4_answers);
      }
    }
    callApi();
  });

  //second set of questions that append info to the tryDiv
  $(".secondActAnswers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question3.activity2.question[0]);
      var prop1 = question3.activity2.answers.prop_1;
      for (var i = 0; i < prop1.length; i++) {
        var prop1_answers = $("<p/>");
        prop1_answers.attr("data-value", prop1[i]);
        prop1_answers.addClass("finalProp answers");
        prop1_answers.text(prop1[i]);
        $("#answersDiv").append(prop1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question3.activity2.question[1]);
      var prop2 = question3.activity2.answers.prop_2;
      for (var h = 0; h < prop2.length; h++) {
        var prop2_answers = $("<p/>");
        prop2_answers.attr("data-value", prop2[h]);
        prop2_answers.addClass("foodProp answers");
        prop2_answers.text(prop2[h]);
        $("#answersDiv").append(prop2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question3.activity2.question[2]);
      var prop3 = question3.activity2.answers.prop_3;
      for (var k = 0; k < prop3.length; k++) {
        var prop3_answers = $("<p/>");
        prop3_answers.attr("data-value", prop3[k]);
        prop3_answers.addClass("finalProp answers");
        prop3_answers.text(prop3[k]);
        $("#answersDiv").append(prop3_answers);
      }
    } else {
      $("#question").text(question3.activity2.question[3]);
      var prop4 = question3.activity2.answers.prop_4;
      for (var l = 0; l < prop4.length; l++) {
        var prop4_answers = $("<p/>");
        prop4_answers.attr("data-value", prop4[l]);
        prop4_answers.addClass("finalProp answers");
        prop4_answers.text(prop4[l]);
        $("#answersDiv").append(prop4_answers);
      }
    }
    callApi();
  });

  //third set of answers that append to the tryDiv
  $(".thirdActAnswers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question3.activity3.question[0]);
      var prop1 = question3.activity3.answers.prop_1;
      for (var i = 0; i < prop1.length; i++) {
        var prop1_answers = $("<p/>");
        prop1_answers.attr("data-value", prop1[i]);
        prop1_answers.addClass("finalProp answers");
        prop1_answers.text(prop1[i]);
        $("#answersDiv").append(prop1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question3.activity3.question[1]);
      var prop2 = question3.activity3.answers.prop_2;
      for (var h = 0; h < prop2.length; h++) {
        var prop2_answers = $("<p/>");
        prop2_answers.attr("data-value", prop2[h]);
        prop2_answers.addClass("finalProp answers");
        prop2_answers.text(prop2[h]);
        $("#answersDiv").append(prop2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question3.activity3.question[2]);
      var prop3 = question3.activity3.answers.prop_3;
      for (var k = 0; k < prop3.length; k++) {
        var prop3_answers = $("<p/>");
        prop3_answers.attr("data-value", prop3[k]);
        prop3_answers.addClass("finalProp answers");
        prop3_answers.text(prop3[k]);
        $("#answersDiv").append(prop3_answers);
      }
    } else {
      $("#question").text(question3.activity3.question[3]);
      var prop4 = question3.activity3.answers.prop_4;
      for (var l = 0; l < prop4.length; l++) {
        var prop4_answers = $("<p/>");
        prop4_answers.attr("data-value", prop4[l]);
        prop4_answers.addClass("finalProp answers");
        prop4_answers.text(prop4[l]);
        $("#answersDiv").append(prop4_answers);
      }
    }
    callApi();
  });

  //fourth set of answers that appends to tryDiv
  $(".fourthActAnswers").on("click", function(event) {
    $("#answersDiv").empty();
    selectedAnswer = parseInt(event.currentTarget.dataset.index);
    if (selectedAnswer === 0) {
      $("#question").text(question3.activity4.question[0]);
      var prop1 = question3.activity4.answers.prop_1;
      for (var i = 0; i < prop1.length; i++) {
        var prop1_answers = $("<p/>");
        prop1_answers.attr("data-value", prop1[i]);
        prop1_answers.addClass("foodProp answers");
        prop1_answers.text(prop1[i]);
        $("#answersDiv").append(prop1_answers);
      }
    } else if (selectedAnswer === 1) {
      $("#question").text(question3.activity4.question[1]);
      var prop2 = question3.activity4.answers.prop_2;
      for (var h = 0; h < prop2.length; h++) {
        var prop2_answers = $("<p/>");
        prop2_answers.attr("data-value", prop2[h]);
        prop2_answers.addClass("foodProp answers");
        prop2_answers.text(prop2[h]);
        $("#answersDiv").append(prop2_answers);
      }
    } else if (selectedAnswer === 2) {
      $("#question").text(question3.activity4.question[2]);
      var prop3 = question3.activity4.answers.prop_3;
      for (var k = 0; k < prop3.length; k++) {
        var prop3_answers = $("<p/>");
        prop3_answers.attr("data-value", prop3[k]);
        prop3_answers.addClass("foodProp answers");
        prop3_answers.text(prop3[k]);
        $("#answersDiv").append(prop3_answers);
      }
    } else {
      $("#question").text(question3.activity4.question[3]);
      var prop4 = question3.activity4.answers.prop_4;
      for (var l = 0; l < prop4.length; l++) {
        var prop4_answers = $("<p/>");
        prop4_answers.attr("data-value", prop4[l]);
        prop4_answers.addClass("foodProp answers");
        prop4_answers.text(prop4[l]);
        $("#answersDiv").append(prop4_answers);
      }
    }
    callApi();
  });
}

//this function gives each endpoint an API path
function callApi() {
  $(".finalProp").on("click", function(event) {
    $("#more").css("display", "flex");
    $("#apiDiv").empty();
    console.log("You clicked");
    secondAnswer = event.currentTarget.dataset.value;
    console.log(secondAnswer);
    if (secondAnswer === "Adventure!") {
      eventbriteApi(9001);
    } else if (secondAnswer === "Take me to the water") {
      eventbriteApi(9003);
    } else if (secondAnswer === "I’m basically Spiderman") {
      eventbriteApi(9005);
    } else if (secondAnswer === "Let’s jump ship") {
      eventbriteApi(9006);
    } else if (secondAnswer === "Open up a book") {
      eventbriteApi(19006);
    } else if (secondAnswer === "Look at pretty pictures") {
      eventbriteApi(19004);
    } else if (secondAnswer === "Controlla") {
      eventbriteApi(19002);
    } else if (secondAnswer === "Primping") {
      eventbriteApi(6004);
    } else if (secondAnswer === "Classical") {
      eventbriteApi(3003);
    } else if (secondAnswer === "Feelin jazzy") {
      eventbriteApi(3002);
    } else if (secondAnswer === "Folk") {
      eventbriteApi(3007);
    } else if (secondAnswer === "Spa") {
      eventbriteApi(7004);
    } else if (secondAnswer === "Yoga") {
      eventbriteApi(7005);
    } else if (secondAnswer === "Surprise me") {
      eventbriteApi(7999);
    } else if (secondAnswer === "RAVE") {
      eventbriteApi(3006);
    } else if (secondAnswer === "Slap the bag") {
      eventbriteApi(10002);
    } else if (secondAnswer === "Headbang") {
      eventbriteApi(3017);
    } else if (secondAnswer === "SHOTS!") {
      eventbriteApi(10004);
    } else if (secondAnswer === "Slam Dunk") {
      eventbriteApi(8006);
    } else if (secondAnswer === "Slap Shot") {
      eventbriteApi(8014);
    } else if (secondAnswer === "Homerun") {
      eventbriteApi(8008);
    } else if (secondAnswer === "Touchdown") {
      eventbriteApi(8007);
    } else if (secondAnswer === "Literally Jammin") {
      eventbriteApi(3015);
    } else if (secondAnswer === "Alt Nation") {
      eventbriteApi(3001);
    } else if (secondAnswer === "Don’t Stop Make It Pop") {
      eventbriteApi(3013);
    } else if (secondAnswer === "Kanye All Day") {
      eventbriteApi(3008);
    } else if (secondAnswer === "Loki super fun") {
      eventbriteApi(19001);
    } else if (secondAnswer === "Cheesin") {
      eventbriteApi(19004);
    } else if (secondAnswer === "NSFW") {
      eventbriteApi(4006);
    } else if (secondAnswer === "Let’s fight about it") {
      eventbriteApi(8016);
    } else if (secondAnswer === "Hold that note") {
      eventbriteApi(5005);
    } else if (secondAnswer === "Where are the words?") {
      eventbriteApi(5006);
    } else if (secondAnswer === "Seriously, where are the words?") {
      eventbriteApi(3003);
    } else if (secondAnswer === "Mamma Mia!") {
      eventbriteApi(5002);
    } else if (secondAnswer === "Luke, I am Your Father.") {
      eventbriteApi(4002);
    } else if (secondAnswer === "Epix & Chill") {
      eventbriteApi(4001);
    } else if (secondAnswer === "Black Swan") {
      eventbriteApi(5003);
    } else if (secondAnswer === "I need a laugh") {
      eventbriteApi(5010);
    } else if (secondAnswer === "Nerdin out") {
      eventbriteApi(4005);
    } else if (secondAnswer === "DIY") {
      eventbriteApi(19003);
    } else if (secondAnswer === "1337") {
      eventbriteApi(19002);
    } else if (secondAnswer === "The theatre has my heart") {
      eventbriteApi(5001);
    } else if (secondAnswer === "I like to move it move it") {
      eventbriteApi(5004);
    }
  });
  $(".foodProp").on("click", function(event) {
    $("#apiDiv").empty();
    $("#more").css("display", "flex");
    finalAnswer = event.currentTarget.dataset.value;
    zomatoApi(finalAnswer);
  });
}

//eventbrite API using AXIOS to get eventbrite info, appends elements to apiDiv (title - picture of the event - button to go to the url)
function eventbriteApi(q) {
  $("#answersDiv").empty();
  $("#question").empty();
  // //This resets the tryDiv so that it empties out before pulling
  // //in more info from the API
  $("#apiDiv").empty();
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
      var i = 0;
      var m = 4;
      loop();
      $("#more").on("click", function(event) {
        $("#apiDiv").empty();
        i += 4;
        m = i + 4;
        loop();
      });
      function loop() {
        for (i; i < m; i++) {
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
      }
    });
}

//Zomato API using fetch to get zomato info, appends elements to apiDiv (name of restaurant - average cost - picture of the restaurant - button to go to the url)
function zomatoApi(r) {
  $("#answersDiv").empty();
  $("#question").empty();
  $("#apiDiv").empty();
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

      var i = 0;
      var p = 4;
      restloop();
      $("#more").on("click", function(event) {
        $("#apiDiv").empty();
        i += 4;
        p = i + 4;
        restloop();
      });
      function restloop() {
        for (i; i < p; i++) {
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
      }
    });
}

$("#restart").on("click", function(event) {
  $("#apiDiv").empty();
  $("#answersDiv").empty();
  $("#question").empty();
  startQuestionnaire();
});
