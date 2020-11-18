import {modele} from "./modele.js"
import {view} from "./view.js"

let uppercase = false

let app = {

    init: function() {

        function checkLineBreak(data)
        {   
            if(data.char == "\\n")
                view.removeParagraph()

            else
                view.refreshScreen(data.inputList)
        }
        

        let charKeyList = document.querySelectorAll(".char")

        for(let i = 0; i < charKeyList.length; i++) {
            charKeyList[i].addEventListener("click", function() {
                modele.addInput(this.dataset.input, uppercase).then(view.refreshScreen)
            })
        }

        
        let delKeyList = document.querySelectorAll(".del")

        for(let i = 0; i < delKeyList.length; i++)
        {
            delKeyList[i].addEventListener("click", function() {
                modele.removeInput().then(checkLineBreak)
            })
        }


        let enterKeyList = document.querySelectorAll(".enter")

        for(let i = 0; i < enterKeyList.length; i++)
        {
            enterKeyList[i].addEventListener("click", function() {
                view.addParagraph().then(modele.addInput(this.dataset.input).then(view.refreshScreen))
            })
        }


        let capsLockKeyList = document.querySelectorAll(".caps-lock")

        for(let i = 0; i < capsLockKeyList.length; i++)
        {
            capsLockKeyList[i].addEventListener("click", function() {
                if(!uppercase)
                {
                    uppercase = true
                    view.charSet(".lower", ".upper")
                }
    
                else
                {
                    uppercase = false
                    view.charSet(".upper", ".lower")
                }

                view.ledSet(uppercase)
            })
        }


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