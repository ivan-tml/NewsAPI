function getNews(category, jsonNews) {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://newsapi.org/v2/top-headlines?country=ie&" +
      category +
      "apiKey=524728793aad4f8089ebe35505369da4"
  );
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      jsonNews(JSON.parse(this.responseText));
    }
  };
}

function writeToDocument(category) {
  let el = document.getElementById("data");
  el.innerHTML = "";
  getNews(category, function(data) {
    data = data.articles;
    data.slice(0, 10).forEach(function(item) {
      el.innerHTML += "<div class='newsBox'><h4>" + item.title + "</h4>" + "<br />" + "<p>" + item.content + "</p></div>";
    });
  });
}