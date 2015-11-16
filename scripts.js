$function() {
  var number = parseInt(input);

  for (var index = 0; index === number.length; index += 1) {

    if (number %3 =0) {
      alert('ping')
    }
    else if (number %5=0) {
      alert('pong')
    }
    else if (number %5=0 && %3=0) {
      alert('pingpong')
    }
    else {
      alert(number)
    }
}
})
