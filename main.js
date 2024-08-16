$(document).ready(function() {
    $(".notyapping").hide();
    $(".why").hide();
    $(".why2").hide();
});

function stopyapping() {
    $(".yapping").hide();
    $(".stopyapping").hide();
    $(".notyapping").show();
}
async function POLSKAA() {
    $(".icon").hide();
    $(".why").show();
    await sleep(1500);
    $(".why2").show();
    $(".why").hide();
    await sleep(1500);
    $(".why2").hide();
}

function sleep(ms) {
    // wait for a specified time
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
function loadstuff() {
    var funstuffPage = "funstuff/index.html";
    window.location = funstuffPage;
}