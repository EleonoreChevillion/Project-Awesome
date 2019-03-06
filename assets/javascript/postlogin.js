$("#quizz").on("click", function() {
  window.location = href = "././questionnaire.html";
});

$("#restaurants").on("click", function() {
  $("#apiDiv").empty();
  $("#quizz").css("display", "none");
  zomatoApi();
});

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
