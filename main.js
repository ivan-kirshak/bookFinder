let bookName = document.getElementById("bookName");
let searchBtn = document.getElementById("searchBtn");
let bookFind = document.getElementById("bookFind");

function lookForBook() {
    const XHR = new XMLHttpRequest();
    let URI = `https://www.googleapis.com/books/v1/volumes?q=${bookName.value}`;
    XHR.addEventListener("readystatechange", function() {
        if(XHR.status === 200 && XHR.readyState === 4) {
            let result = JSON.parse(XHR.responseText);
            console.log(result);
            for(let i = 0; i < result.items.length; i++ ) {
            console.log(result.items[i].volumeInfo.title, result.items[i].volumeInfo.authors.join(','));
            }
        }
    }, false);
    XHR.open("GET", URI);
    XHR.send();
}
searchBtn.addEventListener("click", lookForBook, false);