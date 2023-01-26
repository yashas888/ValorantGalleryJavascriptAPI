console.log("hello");
let desc = document.querySelector(".card-text")
let aname = document.querySelector(".card-title")
let image = document.querySelector(".card-img-top")
let agentcards = document.querySelector(".agent-cards")
let btn = document.getElementsByTagName('a');


const api_url =
"https://valorant-api.com/v1/agents";


// fetching data
fetch(api_url)
.then((response) => response.json())
.then((value) => {
    let arr = Array.from(value.data);
    arr.forEach((ele) => {
        if (ele.isPlayableCharacter == true) {
            agentcards.innerHTML += getHtml(ele.fullPortrait, ele.displayName, ele.uuid);
            console.log(`${api_url}/${ele.uuid}`)
        }
    })
    // <p class="card-text">${description}</p>
    function getHtml(fullPortrait, displayName, uuid) {
        return `<div class="card" style="width: 25rem; height:500px">
        <img src="${fullPortrait}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title text-center">${displayName}</h5>
        <a href="details.html?id=${uuid}" class="btn btn-primary d-flex justify-content-center">View Agent Details</a>
        </div>
        </div>`
    }
});

    
    


