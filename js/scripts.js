$(document).ready(function () {
  $("form#pingpong").submit(function(event) {
    var number = parseInt($("input#usernumber").val());

  for (var index = 0; index <= number; index++) {
    if (number % 3 ===0) {
      $("ul").append("<li>ping</li>");
    }
    else if (number % 5===0) {
      $("ul").append("<li>pong</li>");
    }
    else if (number % 5===0 && number % 3===0) {
      $("ul").append("<li>pingpong</li>");
    }
    else {
      //$("ul").append("<li>("number")</li>");
    }
  }
  event.preventDefault();
});
});
