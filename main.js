var requestOptions = {
  method: "GET",
  redirect: "follow",
};
const apiUrl = "https://api.covid19api.com/summary";

fetch("{{baseUrl}}/country/{{country}}/status/{{status}}/live", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(searchBox.value);
    console.log(searchBox.value);
  }
}

fetch("https://api.covid19api.com/summary", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));
