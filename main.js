let bookName = document.getElementById("bookName");
let searchBtn = document.getElementById("searchBtn");
let bookFind = document.getElementById("bookFind");
let err = document.getElementById("err");

function lookForBook() {
    if (bookName.value === "") {
        err.innerHTML = `<h3 style="color:red">please, print something</h3>`;
    } else {
        err.innerHTML = "";
        const XHR = new XMLHttpRequest();
        let URI = `https://www.googleapis.com/books/v1/volumes?q=${bookName.value}`;
        XHR.addEventListener("readystatechange", function () {
            if (XHR.status === 200 && XHR.readyState === 4) {
                let result = JSON.parse(XHR.responseText);
                //console.log(result);
                for (let i = 0; i < result.items.length; i++) {
                    //console.log(result.items[i].volumeInfo.title, result.items[i].volumeInfo.authors.join(','));
                    //console.log(result.items[i].saleInfo.listPrice.amount);
                    let item = document.createElement("li");
                    item.innerHTML = `<div class="bookItem">
                <div class="thumbnail"><img src="${result.items[i].volumeInfo.imageLinks.thumbnail}"></div>
                    <div class="main-info">
                    <h1 class="mobheading">${result.items[i].volumeInfo.title}</h1>
                    <h2 class="subheading">by ${result.items[i].volumeInfo.authors.join(',')}</h2>
                    <p class="description"><i>${result.items[i].volumeInfo.description}</i></p>
                </div>
                </div>`;
                    bookFind.appendChild(item);
                }
            }
        }, false);
        XHR.open("GET", URI);
        XHR.send();
    }
}
searchBtn.addEventListener("click", lookForBook, false);

// Currently figuring out, how to handle presence / absence of these items, so you can view (or not) 
// possibility to buy a chosen book
{/* <a href="${result.items[i].accessInfo.webReaderLink}" class="link">view sample > </a>
<a href="${result.items[i].saleInfo.buyLink}" class="buylink">buy 
(from ${result.items[i].saleInfo.listPrice.amount}
    ${result.items[i].saleInfo.listPrice.currencyCode}) > </a> */}