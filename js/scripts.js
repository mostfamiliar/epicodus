$(document).ready(function () {
  $("form#pingpong").submit(function(event) {
    var number = parseInt($("input#usernumber").val());

  for (var index = 1; index <= number; index++) {
    if (index % 5 === 0 && index % 3 === 0) {
      $("ul").append("<li>pingpong</li>");
    }
    else if (index % 3 === 0) {
        $("ul").append("<li>ping</li>");
      }
    else if (index % 5 === 0) {
      $("ul").append("<li>pong</li>");
    }
    else {
      $("ul").append("<li>"+index+"</li>");
    }
  };
  event.preventDefault();
});
});
