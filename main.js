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