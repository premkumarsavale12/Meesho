
 import Men from "./Data-1/men.js"
 import Women from "./Data-1/women.js"
 import kids from "./Data/kids.js"
 import Beauty from "./Data-1/Beauty.js"
 import Home from "./Data-1/home.js"
//   function reusable
function renderSubMenu(id, data) {
    let temp = document.getElementById(id)
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ")
            return `
        <div class="column">
            <h1>${el.heading}</h1>
            ${list}
        </div>
       `
        }).join("")
    }
    temp.innerHTML = TempFunc()
}

//  men function
renderSubMenu("Men",Men)

//  Women function
 renderSubMenu("Women",Women)
  
  // kids function
   renderSubMenu("kids",kids)

   // Beauty function
    renderSubMenu("Beauty",Beauty)

    // home & living
    renderSubMenu("Home",Home)