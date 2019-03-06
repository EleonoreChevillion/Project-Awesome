$("#quizz").on("click", function() {
  window.location = href = "././questionnaire.html";
});

eventbriteRandom();
function eventbriteRandom() {
  $("#answersDiv").empty();
  $("#question").empty();

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
      "https://www.eventbriteapi.com/v3/events/search?location.address=newyork&location.within=10km&expand=venue"
    )
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

        var c = $("<button>");
        c.addClass("btn btn-outline-info");
        c.addClass("moreInfo");
        c.text("Get me tickets!");
        $(mainDiv).append(c);
        $(".moreInfo").on("click", function() {
          window.location = results.events[i].url;
        });
        $("#randomDiv").append(mainDiv);
      }
    });
}
// function eventbriteApi() {
//   fetch(
//     "https://www.eventbriteapi.com/v3/events/search?location.address=newyork&location.within=10km&expand=venue",
//     {
//       headers: {
//         Bearer: "XES5FUKPHLCMR7UUVVUA"
//       }
//     }
//   )
//     .then(function(response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function(result) {
//       console.log(result.data);
//       var results = result.data;
//       console.log(results.events[0].url);

//       for (var i = 0; i < 5; i++) {
//         var mainDiv = $("<div>");
//         mainDiv.addClass("col-md-4");
//         var a = $("<h4>");
//         a.text(results.events[i].name.text);
//         $(mainDiv).append(a);

//         var articleImg = $("<img>");
//         articleImg.attr("src", results.events[i].logo.original.url);
//         articleImg.attr("class", "card-img-top");
//         $(mainDiv).append(articleImg);

//         var c = $("<button>");
//         c.addClass("btn btn-outline-info");
//         c.addClass("moreInfo");
//         c.text("Get me tickets!");
//         $(mainDiv).append(c);
//         $(".moreInfo").on("click", function() {
//           window.location = results.events[i].url;
//         });
//         $("#activityrandom").append(mainDiv);
//       }
//     });
// }
