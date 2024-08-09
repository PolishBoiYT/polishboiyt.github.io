$(document).ready(function () {
  $("#stop").hide();
});

async function afterALL() {
  // after all
  await sleep(1400);
  const para = document.createElement("p");
  para.innerText = "after...";
  document.body.appendChild(para);
  await sleep(1200);
  para.innerText = "after ALL";
  await sleep(850);
  para.innerText = "OF";
  await sleep(100);
  para.innerText = "OF THE";
  await sleep(100);
  para.innerText = "OF THE WA";
  await sleep(450);
  para.innerText = "OF THE WASTED";
  await sleep(525);
  para.innerText = "OF THE WASTED YEARS";
  await sleep(1200);
  para.innerText = "NEED";
  await sleep(100);
  para.innerText = "NEED TO";
  await sleep(100);
  para.innerText = "NEED TO GET";
  await sleep(375);
  para.innerText = "NEED TO GET A";
  await sleep(100);
  para.innerText = "NEED TO GET A TASTE";
  await sleep(375);
  para.innerText = "NEED TO GET A TASTE OF";
  await sleep(100);
  para.innerText = "NEED TO GET A TASTE OF YOUR";
  await sleep(365);
  const secondPara = document.createElement("p");
  secondPara.style.color = "red"; 
  document.body.style.backgroundColor = "black";
  secondPara.innerText = "FEAR";
  document.body.appendChild(secondPara);
  await sleep(1150);
  secondPara.innerText = "";
  para.innerText = "NEED";
  await sleep(100);
  para.innerText = "NEED A";
  await sleep(100);
  para.innerText = "NEED A LITTLE";
  await sleep(375);
  para.innerText = "NEED A LITTLE TASTE";
  await sleep(350);
  para.innerText = "NEED A LITTLE TASTE OF ";
  await sleep(100);
  para.innerText = "NEED A LITTLE TASTE OF YOUR";
  await sleep(365);
  document.body.style.backgroundColor = "black";
  secondPara.style.color = "red"; 
  secondPara.innerText = "BLOOD";
  await sleep(895);
  para.innerText = "THEN";
  secondPara.innerText = "";
  await sleep(355);
  para.innerText = "THEN WE";
  await sleep(375);
  para.innerText = "THEN WE CAN";
  await sleep(100);
  para.innerText = "THEN WE CAN FINALLY";
  await sleep(375);
  para.innerText = "THEN WE CAN FINALLY BE";
  await sleep(285);
  para.innerText = "THEN WE CAN FINALLY BE ONE";
  document.body.style.backgroundColor = "gray";
  await sleep(825);
  para.innerText = "YOU'RE";
  await sleep(125);
  para.innerText = "YOU'RE EVERYTHING";
  await sleep(375);
  para.innerText = "YOU'RE EVERYTHING THAT";
  await sleep(125);
  para.innerText = "YOU'RE EVERYTHING THAT I";
  await sleep(375);
  para.innerText = "YOU'RE EVERYTHING THAT I EVER";
  await sleep(550);
  para.innerText = "YOU'RE EVERYTHING THAT I EVER WANTED";
  await sleep(900);
  para.innerText = "JUST";
  await sleep(125);
  para.innerText = "JUST A";
  await sleep(125);
  para.innerText = "JUST A SINGLE";
  await sleep(375);
  para.innerText = "JUST A SINGLE BITE";
  await sleep(375);
  para.innerText = "JUST A SINGLE BITE AND";
  await sleep(125);
  para.innerText = "JUST A SINGLE BITE AND I'M";
  await sleep(375);
  para.innerText = "JUST A SINGLE BITE AND I'M THROUGH";
  await sleep(825);
  para.innerText = "THERE'S";
  await sleep(125);
  para.innerText = "THERE'S NO";
  await sleep(125);
  para.innerText = "THERE'S NO NEED";
  await sleep(325);
  para.innerText = "THERE'S NO NEED TO";
  await sleep(125);
  para.innerText = "THERE'S NO NEED TO BEG";
  await sleep(650);
  para.innerText = "THERE'S NO NEED TO BEG OR";
  await sleep(375);
  para.innerText = "THERE'S NO NEED TO BEG OR BARGAIN";
  await sleep(900);
  para.innerText = "BECAUSE";
  await sleep(375);
  para.innerText = "BECAUSE ALL";
  await sleep(350);
  para.innerText = "BECAUSE ALL I";
  await sleep(125);
  para.innerText = "BECAUSE ALL I NEED";
  await sleep(345);
  para.innerText = "BECAUSE ALL I NEED IS";
  await sleep(325);
  para.innerText = "BECAUSE ALL I NEED IS YOU";
  await sleep(1200);
  await sleep(1200);
  realstop();
}
function twiddle() {
  // shows an alert, plays audio, hides everything and shows the stop button
  alert("HOW DID YOU FIND ME")
  var audio = new Audio("afterall.mp3");
  audio.play();
  document.title = "after ALLLL";
  $(".box").hide();
  $(".hi").hide();
  $(".twiddle").hide();
  $("#stop").show();
  afterALL();
}
function realstop() {
  // reload the page
  location.reload();
}
function stop() {
  const dabutton = document.getElementById('stop');
  dabutton.textContent = "no you gotta wait until it ends.";
  dabutton.style.backgroundColor = "black";
}
function sleep(ms) {
  // wait for a specified time
  return new Promise((resolve) => setTimeout(resolve, ms));
}
