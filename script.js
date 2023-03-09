var btnSearchEl = document.getElementById("btnSearch")
var btnOneEl = document.getElementById("btnOne")
var btnTwoEl = document.getElementById("btnTwo")
var btnThreeEl = document.getElementById("btnThree")
var btnFourEl = document.getElementById("btnFour")
var btnFiveEl = document.getElementById("btnFive")
var btnSixEl = document.getElementById("btnSix")
var btnSevenEl = document.getElementById("btnSeven")
var btnEightEl = document.getElementById("btnEight")
var mainEL = document.getElementById("main")
var userInput = $("#search")

function getApiSearch() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput.val() + "&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
// Search bar
  fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
  
  console.log("Received!!");
    }

function getApiOne() {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.748997&lon=-84.387985&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
  // Atlanta
    fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
    console.log("Received!!");
      }

function getApiTwo() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=39.739235&lon=-104.990250&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
  // Denver
  fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log("Received!!");
    }

function getApiThree() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=47.603230&lon=-122.330276&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
// Seattle
  fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log("Received!!");
    }

        
function getApiFour() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=37.780079&lon=-122.420174&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
// San Fransisco
  fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log("Received!!");
    }


function getApiFive() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=28.538330&lon=-81.378883&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
// Orlando
  fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log("Received!!");
    }


function getApiSix() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.712776&lon=-74.005974&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
// New York
  fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log("Received!!");
    }


function getApiSeven() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=41.878113&lon=-87.629799&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
// Chicago
  fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log("Received!!");
    }


function getApiEight() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=42.331429&lon=-83.045753&appid=62b78fd432f4f7c034943f7f3abc8315&units=imperial";
// Detroit
  fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log("Received!!");
    }

btnSearchEl.addEventListener("click", function() {
  getApiSearch()
  
})
btnOneEl.addEventListener("click", function() {
  getApiOne()

})
btnTwoEl.addEventListener("click", function() {
  getApiTwo()
})
btnThreeEl.addEventListener("click", function() {
  getApiThree()
})
btnFourEl.addEventListener("click", function() {
  getApiFour()
})
btnFiveEl.addEventListener("click", function() {
  getApiFive()
})
btnSixEl.addEventListener("click", function() {
  getApiSix()
})
btnSevenEl.addEventListener("click", function() {
  getApiSeven()
})
btnEightEl.addEventListener("click", function() {
  getApiEight()
})