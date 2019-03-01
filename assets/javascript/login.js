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