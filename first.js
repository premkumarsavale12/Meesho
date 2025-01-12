

import beautiful from "./Data/beautiful.js"
import electronics from "./Data/electronics.js"
import home from "./Data/home-kitchen.js"
import jewellery from "./Data/jewellery.js"
import kids from "./Data/kids.js"
import men from "./Data/men.js"
import WomenEthic from "./Data/womenEthic.js"
import WomenWestern from "./Data/WomenWestern.js"
import Bags from "./Data/bags.js"


let inputsearchEI = document.querySelector(".inputsearch")
let recentinput = []
let forminputEI = document.getElementById("inputform")
const listofrecentEI = document.querySelector(".listofrecent")


inputsearchEI.addEventListener("keydown", () => {
    // console.log(inputsearchEI)

    if (inputsearchEI.value) {
        document.getElementById("closesearch").style.display = "block"
    }

    else {
        document.getElementById("closesearch").style.display = "none"
    }

})

forminputEI.addEventListener("submit", (e) => {
    e.preventDefault()

    let listofrecentHTMLEI = ""

    recentinput.push(inputsearchEI.value)
    console.log(recentinput)

    if (recentinput.length > 0) {
        for (let i = 0; i < recentinput.length; i++) {
            listofrecentHTMLEI +=
                `
              <div class="recentitem">
                   <div class="recenticon">
                        <img src="img/recent-png.png" alt="">
                   </div>
                   <p>${recentinput[i]}</p>
             
                  </div>
                  `
        }
        listofrecentEI.innerHTML = listofrecentHTMLEI
    }
})


// function reusable

function renderSubMenu(id, data) {
    let temp = document.getElementById(id)
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ")
            return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
        }).join("")
    }
    temp.innerHTML = TempFunc()
}

/****womenEthic */
renderSubMenu("WomenEthic", WomenEthic)

/****WomenWestern */
renderSubMenu("WomenWestern", WomenWestern)


//Men 
renderSubMenu("Men", men)

/***kids */
renderSubMenu("Kids", kids)

/**home % kitchen */
renderSubMenu("Home",home )

/**beauty and health */
renderSubMenu("Beauty", beautiful)

// Jewellery & Accessories
renderSubMenu("Jewellery", jewellery)

// Bags & Footwear
renderSubMenu("Bags",Bags )

// Electronics
renderSubMenu("Electronics", electronics)








//  women Ethics script

// let womenEthic = document.getElementById("WomeEthic")



// function womenEthicFun(){
//    return   WomenEthic.map(el =>{
//        return `
//        <div> <h3> ${el.heading}</h3>
//        ${
        
//          el.data.forEach(element =>{
//             return `
//             <p>${element}</p>
//             `
//          })
//        }
//        </div>
//        `

//     })
// }
// womenEthic.innerHTML = womenEthicFun()

