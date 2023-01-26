const agentUuid = window.location.href.split("?")[1].split("=")[1];
console.log(agentUuid) 
const detailsContainer = document.querySelector(".details-container");

fetch("https://valorant-api.com/v1/agents/"+agentUuid)
.then(response => response.json())
.then(details =>{
    let agentDetail = details.data;
    // console.log(agentDetail.abilities.forEach(element => {
    //   console.log(element.slot)
    // }));
    console.log(agentDetail.role.displayName)



    detailsContainer.innerHTML += getDetails(agentDetail.fullPortraitV2,agentDetail.developerName,agentDetail.role.description,agentDetail.role.displayName,agentDetail.description)
    function getDetails(fullPortrait,displayName,roleDescription,role,description){
        return ` <div class="" class="card mt-5" style="width: 40rem; height: 40rem;">
        <h2 class="text-center mt-5 mb-3">Agent Developed by ${displayName}</h2>
        <img src="${fullPortrait}" class="card-img-top" alt="...">
      </div>
      <div class="p-5">
            <h1>Description:<br></h1>
            <p>${description}</p>
            <h1>Role:</h1>
            <p>${role}</p>
            <h1>Role Description:</h1>
            <p>${roleDescription}</p>
        </div>`
    }
})