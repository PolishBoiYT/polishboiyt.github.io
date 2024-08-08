$(document).ready(function() {
    $(".notyapping").hide();
});

function stopyapping() {
    $(".yapping").hide();
    $(".stopyapping").hide();
    $(".notyapping").show();
}

function loadstuff() {
    var funstuffPage = "funstuff/index.html";
    window.location = funstuffPage;
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}