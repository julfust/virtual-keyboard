import {modele} from "./modele.js"
import {view} from "./view.js"

let app = {
    init: function() {
        
        let charKeyList = document.querySelectorAll(".char")

        for(let i = 0; i < charKeyList.length; i++) {
            charKeyList[i].addEventListener("click", function() {
                modele.addInput(this.dataset.input).then(view.refreshScreen)
            })
        }

        
        let del = document.querySelector(".del")

        del.addEventListener("click", function() {
            modele.removeInput().then(view.refreshScreen)
        })


        let enter = document.querySelector(".enter")

        enter.addEventListener("click", function() {
            view.addParagraph().then(modele.addInput(this.dataset.input).then(view.refreshScreen))
        })


        let capsLock = document.querySelector(".caps-lock")

        capsLock.addEventListener("click", function() {
            console.log("caps lock")
        })


        let lightButton = document.querySelector(".light-button")

        lightButton.addEventListener("click", function() {
            console.log("light mode")
        })


        let darkButton = document.querySelector(".dark-button")

        darkButton.addEventListener("click", function() {
            console.log("dark mode")
        })
    }
}

app.init()