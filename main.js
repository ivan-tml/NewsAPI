let xhr = new XMLHttpRequest();
let news = "";

xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=ie&apiKey=524728793aad4f8089ebe35505369da4")
xhr.send();

function getNews(jsonNews) {
    news = jsonNews;
    
}

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        news = this.responseText;
        getNews(JSON.parse(this.responseText));
    }
};

