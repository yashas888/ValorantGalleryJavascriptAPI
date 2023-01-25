console.log("hello");
let desc = document.querySelector(".card-text")
let aname = document.querySelector(".card-title")
let image = document.querySelector(".card-img-top")
let agentcards = document.querySelector(".agent-cards")

const api_url =
    "https://valorant-api.com/v1/agents";

// fetching data
fetch(api_url)
    .then((response) => response.json())
    .then((value) => {
        let arr = Array.from(value.data);
        // console.log(arr)
        // aname.innerHTML = value.data[1].displayName;
        // image.src = value.data[1].fullPortrait;
        // desc.innerHTML = value.data[1].description;
        let html = ""; 
        arr.forEach((ele) => {
            // const card = document.createElement("div");
            // card.classList.add = "agent-card";
                
            // console.log(ele.uuid)
            // console.log(ele.role.displayName)
            //entering details to created card
            html += `<div class="card" style="width: 25rem; height:600px">
            <img src="${ele.fullPortrait}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${ele.displayName}</h5>
            <p class="card-text">${ele.description}</p>
            <a href="" id="vgd" data-id="${ele.uuid}" onclick="" class="btn btn-primary">View Agent Details</a>
            </div>
            </div>  
            `
            // card.innerHTML += duplicate;
            // let cards = document.getElementById("cards")
            // cards.appendChild(card);

        })
        agentcards.innerHTML = html;
        
    });


    const fetchRelevantData = function(){
        // const atag = document.getElementsByTagName("a");
        let uuid = document.querySelector('#vgd');
            let target = uuid.getAttribute('data-id');
            let urlStr = String(target);
        fetch("https://valorant-api.com/v1/agents/" + urlStr)
        .then((response) => response.json())
        .then(dataObtained =>{
            console.log(dataObtained)
        })
    }
    
    // fetchRelevantData()
  

   




