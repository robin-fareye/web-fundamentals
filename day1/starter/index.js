//api call
//card layout
//configurable
function fetchDataFromServer() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => fetchUserData(json));
}

function fetchUserData(data){
    let mainContainer = document.getElementsByClassName("main-conatiner")[0];
    console.log(data.users);
    data.users.forEach((ele) => {
      mainContainer.appendChild(renderCard(ele));
    });
}

function nameFormatter(user){
    return `${user.firstName} ${user.lastName}`
}
function companyFormatter(user){
    return user.company.name
}
function positionFormatter(user){
    return user.company.title
}

let config = [
    { key: "name", label: "Name", formatter: nameFormatter },
    { key: "age", label: "Age" },
    { key: "weight", label: "Weight"},
    { key: "phone", label: "Phone" },
    { key: "bloodGroup", label: "Blood Group" },
    { key: "company", label: "Company",formatter: companyFormatter},
    { key: "position", label: "Position",formatter:positionFormatter },
    
  ];
//   const renderCard=(user)=>{
//     return (
//         `<div class="main-conatiner">
//         <div class="card">
//           <img src="./image.jpg"  />
//           <p class="info" id="name">Name: Robin</p>
//           <p class="info" id="age">Age: 21</p>
//           <p class="info" id="weight">Weight: 7x</p>
//           <p class="info" id="phone">Phone: 999*******</p>
//           <p class="info" id="blood-group">Blood Group: O-</p>
//           <p class="info" id="company">Comapny: Fareye</p>
//         </div>
//       </div>`
//     )
//   }
function renderCard(user){

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let image=document.createElement("img")
    image.setAttribute("src", user.image);
    let details=document.createElement("div")

    config.forEach((element) => {
        let { label, formatter, key } = element;
        if (formatter) {
          key = formatter(user);
        } else {
          key = user[key];
        }
        details.appendChild(getDetails(label, key));
      });

    card.appendChild(image);
    card.appendChild(details)

    return card;
}

function getDetails(label, value){
    let details = document.createElement("div");
    let pr = document.createElement("span");
    pr.setAttribute("class", "info");
    pr.textContent = label;
    let span = document.createElement("span");
    span.setAttribute("class", "info");
    console.log(value);
    span.textContent = value;
    details.appendChild(pr);
    details.appendChild(span);

    return details;
}













fetchDataFromServer();
