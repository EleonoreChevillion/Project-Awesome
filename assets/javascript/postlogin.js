$(document).ready(function() {
  randomEvents();

  //goes back to the random events and the quizz button
  $("#home").on("click", function() {
    $("#apiDiv").css("display", "none");
    randomEvents();
    $("#randomDiv").css("display", "flex");
    $("#quizz").css("display", "inline");
  });

  //click the quizz button to go to questionnaire page
  $("#quizz").on("click", function() {
    window.location = href = "././questionnaire.html";
  });

  //click the restaurants button to get random selection of restaurants
  $("#restaurants").on("click", function() {
    $("#apiDiv").empty();
    $("#randomDiv").css("display", "none");
    $("#quizz").css("display", "none");
    zomatoApi();
  });

  //click the culture button to get random selection of cultural events
  $("#culture").on("click", function() {
    $("#apiDiv").empty();
    $("#randomDiv").css("display", "none");
    $("#quizz").css("display", "none");
    eventbriteApi(113);
  });

  //click the sports button to get random selection of sports events
  $("#sports").on("click", function() {
    $("#apiDiv").empty();
    $("#randomDiv").css("display", "none");
    $("#quizz").css("display", "none");
    eventbriteApi(108);
  });

  //click the music button to get random selection of sports events
  $("#music").on("click", function() {
    $("#apiDiv").empty();
    $("#randomDiv").css("display", "none");
    $("#quizz").css("display", "none");
    eventbriteApi(103);
  });

  //Zomato API using fetch to get zomato info, appends elements to apiDiv (name of restaurant - average cost - picture of the restaurant - button to go to the url)
  function zomatoApi() {
    fetch(
      "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city",
      {
        headers: {
          "user-key": "504af04e6861c274d55e91c18d40ac0d"
        }
      }
    )
      .then(function(response) {
        // console.log(response);
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        var restaurants = data.restaurants;
        for (var i = 0; i < 10; i++) {
          // console.log(restaurants[0].restaurant.name);
          // console.log(restaurants[0].restaurant.events_url);
          // console.log(restaurants[0].restaurant.average_cost_for_two);
          // console.log(restaurants[0].restaurant.location.locality);

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

  //eventbrite API using AXIOS to get eventbrite info, appends elements to apiDiv (title - picture of the event - button to go to the url)
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
        "https://www.eventbriteapi.com/v3/events/search/?categories=" +
          q +
          "&location.address=newyork" +
          "&start_date.keyword=this_week"
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
        for (var i = 0; i < 10; i++) {
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

  //eventbrite API, gets random events
  function randomEvents() {
    const instance = axios.create({
      headers: {
        get: {
          Authorization: "Bearer XES5FUKPHLCMR7UUVVUA"
        }
      }
    });

    instance
      .get(
        "https://www.eventbriteapi.com/v3/events/search/?location.address=newyork"
      )

      .then(function(result) {
        // console.log("in here");
        // console.log(result.data);
        var results = result.data;
        // console.log(results.events[0].url);
        // console.log(results.length);
        // var filtered = results.events.filter(function(event) {
        //   if (event.end.timezone === "America/New_York") {
        //     return true;
        //   }
        // });
        // console.log(filtered);
        for (var i = 0; i < 10; i++) {
          var mainDiv = $("<div>");
          mainDiv.addClass("col-md-3");
          // console.log(results.events[i].url);
          var a = $("<h4>");
          a.text(results.events[i].name.text);
          $(mainDiv).append(a);

          var articleImg = $("<img>");
          articleImg.attr("src", results.events[i].logo.original.url);
          articleImg.attr("class", "card-img-top");
          $(mainDiv).append(articleImg);

          var c = $("<button>");
          c.addClass("btn btn-outline-info");
          c.addClass("moreInfo");
          c.text("Get me tickets!");
          $(mainDiv).append(c);
          $("#randomDiv").append(mainDiv);
          $(".moreInfo").on("click", function() {
            window.location = results.events[i].url;
          });
        }
      });
  }

  foursquare();
  function foursquare() {
    fetch(
      "https://api.foursquare.com/v2/venues/trending?client_id=RV0DYSYUJD1ZXHAY1LBBXQDQ2YNRBRMSAWR1BPHK54RKWHTQ&client_secret=OHAMSCG5X4TVLVHIHXNI2HS3YRSR4QKDQLOK1MWE42EV0NES&v=20180323&ll=40.7243,-74.0018"
    )
      .then(function(response) {
        console.log("RESPONSE", response);
        return response.json();
      })
      .then(function(data) {
        console.log("DATA", data);
        // var results = response.venues;
        // for (var i = 0; i < 10; i++) {
        //   var mainDiv = $("<div>");
        //   mainDiv.addClass("col-md-3");
        //   // console.log(results.events[i].url);
        //   var a = $("<h4>");
        //   a.text(results.events[i].name.text);
        //   $(mainDiv).append(a);

        //   var articleImg = $("<img>");
        //   articleImg.attr("src", results.events[i].logo.original.url);
        //   articleImg.attr("class", "card-img-top");
        //   $(mainDiv).append(articleImg);

        // var c = $("<button>");
        // c.addClass("btn btn-outline-info");
        // c.addClass("moreInfo");
        // c.text("Get me tickets!");
        // $(mainDiv).append(c);
        // $("#randomDiv").append(mainDiv);
        // $(".moreInfo").on("click", function() {
        //   window.location = results.events[i].url;
        // });
        // }
      });
  }
});
