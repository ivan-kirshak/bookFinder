let bookName = document.getElementById("bookName");
let searchBtn = document.getElementById("searchBtn");
let bookFind = document.getElementById("bookFind");
let err = document.getElementById("err");
let moviesData = [];

function lookForBook() {
    if (bookName.value === "") {
        err.innerHTML = `<h3 style="color:red">please, print something</h3>`;
    } else {
        err.innerHTML = "";
        // const XHR = new XMLHttpRequest();
        // let URI = `https://www.googleapis.com/books/v1/volumes?q=${bookName.value}`;
        // XHR.addEventListener("readystatechange", function () {
        //     if (XHR.status === 200 && XHR.readyState === 4) {
        //         let result = JSON.parse(XHR.responseText);
        //         for (let i = 0; i < data.items.length; i++) {
        //             let item = document.createElement("li");
        //             if (data.items[i].saleInfo.saleability === "NOT_FOR_SALE") {
        //                 item.innerHTML = `<div class="bookItem">
        //                 <div class="thumbnail"><img src="${data.items[i].volumeInfo.imageLinks.thumbnail}"></div>
        //                 <div class="main-info">
        //                 <h1 class="mobheading">${data.items[i].volumeInfo.title}</h1>
        //                 <h2 class="subheading">by ${data.items[i].volumeInfo.authors}</h2>
        //                 <p class="description"><i>${data.items[i].volumeInfo.description}</i></p>
        //                 <a href="${data.items[i].accessInfo.webReaderLink}" target="_blank" class="link">view sample</a>
        //                 </div>
        //                 </div>`;
        //             } else if (data.items[i].saleInfo.saleability === "FOR_SALE") {
        //                 item.innerHTML = `<div class="bookItem">
        //                 <div class="thumbnail"><img src="${data.items[i].volumeInfo.imageLinks.thumbnail}"></div>
        //                 <div class="main-info">
        //                 <h1 class="mobheading">${data.items[i].volumeInfo.title}</h1>
        //                 <h2 class="subheading">by ${data.items[i].volumeInfo.authors}</h2>
        //                 <p class="description"><i>${data.items[i].volumeInfo.description}</i></p>
        //                 <div class="buttons">
        //                 <a href="${data.items[i].accessInfo.webReaderLink}" target="_blank" class="link">view sample</a>
        //                 <a href="${data.items[i].saleInfo.buyLink}" target="_blank" class="buylink">buy 
        //                 (from ${data.items[i].saleInfo.listPrice.amount}
        //                 ${data.items[i].saleInfo.listPrice.currencyCode})</a>
        //                 </div>
        //                 </div>
        //                 </div>`;
        //             } else if (data.items[i].saleInfo.saleability === "FREE") {
        //                 item.innerHTML = `<div class="bookItem">
        //                 <div class="thumbnail"><img src="${data.items[i].volumeInfo.imageLinks.thumbnail}"></div>
        //                 <div class="main-info">
        //                 <h1 class="mobheading">${data.items[i].volumeInfo.title}</h1>
        //                 <h2 class="subheading">by ${data.items[i].volumeInfo.authors}</h2>
        //                 <p class="description"><i>${data.items[i].volumeInfo.description}</i></p>
        //                 <div class="buttons">
        //                 <a href="${data.items[i].accessInfo.webReaderLink}" target="_blank" class="link">view sample</a>
        //                 <a href="${data.items[i].saleInfo.buyLink}" target="_blank" class="freelink">get free eBook</a>
        //                 </div>
        //                 </div>
        //                 </div>`;
        //             }
        //             bookFind.appendChild(item);
        //         }
        //     }
        // }, false);
        // XHR.open("GET", URI);
        // XHR.send();

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName.value}`)
            .then(response => { return response.json() })
            .then(data => {
                bookFind.innerHTML = '';
                for (let i = 0; i < data.items.length; i++) {
                    let item = document.createElement("li");
                    if (data.items[i].saleInfo.saleability === "NOT_FOR_SALE") {
                        item.innerHTML = `<div class="bookItem">
                                        <div class="thumbnail"><img src="${data.items[i].volumeInfo.imageLinks.thumbnail}"></div>
                                        <div class="main-info">
                                        <h1 class="mobheading">${data.items[i].volumeInfo.title}</h1>
                                        <h2 class="subheading">by ${data.items[i].volumeInfo.authors}</h2>
                                        <p class="description"><i>${data.items[i].volumeInfo.description}</i></p>
                                        <a href="${data.items[i].accessInfo.webReaderLink}" target="_blank" class="link">view sample</a>
                                        </div>
                                        </div>`;
                    } else if (data.items[i].saleInfo.saleability === "FOR_SALE") {
                        item.innerHTML = `<div class="bookItem">
                                        <div class="thumbnail"><img src="${data.items[i].volumeInfo.imageLinks.thumbnail}"></div>
                                        <div class="main-info">
                                        <h1 class="mobheading">${data.items[i].volumeInfo.title}</h1>
                                        <h2 class="subheading">by ${data.items[i].volumeInfo.authors}</h2>
                                        <p class="description"><i>${data.items[i].volumeInfo.description}</i></p>
                                        <div class="buttons">
                                        <a href="${data.items[i].accessInfo.webReaderLink}" target="_blank" class="link">view sample</a>
                                        <a href="${data.items[i].saleInfo.buyLink}" target="_blank" class="buylink">buy 
                                        (from ${data.items[i].saleInfo.listPrice.amount}
                                        ${data.items[i].saleInfo.listPrice.currencyCode})</a>
                                        </div>
                                        </div>
                                        </div>`;
                    } else if (data.items[i].saleInfo.saleability === "FREE") {
                        item.innerHTML = `<div class="bookItem">
                                        <div class="thumbnail"><img src="${data.items[i].volumeInfo.imageLinks.thumbnail}"></div>
                                        <div class="main-info">
                                        <h1 class="mobheading">${data.items[i].volumeInfo.title}</h1>
                                        <h2 class="subheading">by ${data.items[i].volumeInfo.authors}</h2>
                                        <p class="description"><i>${data.items[i].volumeInfo.description}</i></p>
                                        <div class="buttons">
                                        <a href="${data.items[i].accessInfo.webReaderLink}" target="_blank" class="link">view sample</a>
                                        <a href="${data.items[i].saleInfo.buyLink}" target="_blank" class="freelink">get free eBook</a>
                                        </div>
                                        </div>
                                        </div>`;
                    }
                    bookFind.appendChild(item);
                }
            });

    }

}

searchBtn.addEventListener("click", lookForBook, false);
document.body.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        lookForBook();
    }
}, false)