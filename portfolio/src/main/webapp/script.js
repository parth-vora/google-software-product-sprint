// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var mykey = config.MY_KEY;
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
google.charts.load("current", {
  packages: ["geochart"],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey: mykey
});
google.charts.setOnLoadCallback(drawRegionsMap);

function addRandomGreeting() {
  const greetings = [
    "I live in New Jersey",
    "I am 20 years old",
    "My school had prom on the Today Show",
    "I have an American Eskimo dog",
    "I have worked at a TedTalk before",
    "I was part of Google CSSI two years ago",
    "I currently work at the biggest tissue/skin graft company",
    "I can speak Mandarin"
  ];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById("greeting-container");
  greetingContainer.innerText = greeting;
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement("li");
  liElement.innerText = text;
  return liElement;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn("string", "Activity");
  data.addColumn("number", "Count");
  data.addRows([
    ["Sleep", 15],
    ["Class", 20],
    ["Work", 15],
    ["Sit in Traffic", 20],
    ["Drink Boba", 5],
    ["Weekly Meetings", 10],
    ["Walk my Dog", 15]
  ]);

  const options = {
    title: "Weekly Activites",
    width: 320,
    height: 200
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("chart-container")
  );
  chart.draw(data, options);
}

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Order"],
    ["United States", 0],
    ["Greenland", 1],
    ["England", 2],
    ["Italy", 3],
    ["France", 4],
    ["Japan", 5],
    ["Finland", 6],
    ["Germany", 7],
    ["China", 8],
    ["Spain", 9],
    ["Barcelona", 10],
    ["Switzerland", 11],
    ["Australia", 12]
  ]);

  var options = {
    colorAxis: { colors: ["#7dbfdf", "#12127c"] },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5"
  };

  var chart = new google.visualization.GeoChart(
    document.getElementById("geochart-colors")
  );
  chart.draw(data, options);
}
