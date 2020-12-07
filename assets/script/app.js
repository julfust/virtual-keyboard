import {modele} from "./modele.js"
import {view} from "./view.js"

let shift = false
let capsLock = false
let viewMode = "light"

let app = {

    init: function() {

        function checkLineBreak(data)
        {   
            if(data.char === "\\n")
                view.removeParagraph()

            else
                view.refreshScreen(data.inputList)
        }
        

        let charKeyList = document.querySelectorAll(".char")

        for(let i = 0; i < charKeyList.length; i++) {
            charKeyList[i].addEventListener("click", function() {
                modele.addInput(this.dataset.input, shift, capsLock).then(view.refreshScreen)

                if(shift)
                {
                    shift = false
                    modele.setMajMode(shift, capsLock)
                    view.ledSet(".shift-led", shift)

                    if(!modele.uppercase)
                        view.charSet(".upper", ".lower")
                }
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
                

                let targetList = document.querySelectorAll(".changeable")

                if(viewMode === "light")
                    view.changeViewMode(targetList, "--night", "--light")
    
                else
                    view.changeViewMode(targetList, "--light", "--night")
            })
        }


        let capsLockKey = document.querySelector(".caps-lock")

        capsLockKey.addEventListener("click", function() {
            if(!capsLock)
            {
                capsLock = true

                modele.setMajMode(shift, capsLock)

                if(modele.uppercase)
                    view.charSet(".lower", ".upper")
                
                view.ledSet(".caps-led", capsLock)
            }

            else
            {
                capsLock = false

                modele.setMajMode(shift, capsLock)

                if(!modele.uppercase)
                    view.charSet(".upper", ".lower")

                view.ledSet(".caps-led", capsLock)
            }
        })

        let shiftKey = document.querySelector(".shift")

        shiftKey.addEventListener("click", function() {
            if(!shift)
            {
                shift = true

                modele.setMajMode(shift, capsLock)

                if(modele.uppercase)
                    view.charSet(".lower", ".upper")

                view.ledSet(".shift-led", shift)
            }

            else
            {
                shift = false

                modele.setMajMode(shift, capsLock)

                if(!modele.uppercase)
                    view.charSet(".upper", ".lower")

                view.ledSet(".shift-led", shift)
            }
        })


        let mobileMajKeyList = document.querySelectorAll(".mobile-maj")

        for(let i = 0; i < mobileMajKeyList.length; i++) {
            mobileMajKeyList[i].addEventListener("click", function() {
                if(!shift && !capsLock)
                {
                    shift = true
                    view.ledSet(".shift-led", shift)

                    modele.setMajMode(shift, capsLock)
                    view.charSet(".lower", ".upper")
                    
                    return
                }

                else if(shift && !capsLock)
                {
                    shift = false
                    view.ledSet(".shift-led", shift)

                    capsLock = true
                    view.ledSet(".caps-led", capsLock)

                    modele.setMajMode(shift, capsLock)
                    view.charSet(".lower", ".upper")
                    
                    return
                }

                else if(capsLock && !shift)
                {
                    capsLock = false
                    view.ledSet(".caps-led", capsLock)

                    modele.setMajMode(shift, capsLock)
                    view.charSet(".upper", ".lower")
        
                    return
                }

                else
                {
                    shift = false
                    view.ledSet(".shift-led", shift)

                    capsLock = false
                    view.ledSet(".caps-led", capsLock)

                    modele.setMajMode(shift, capsLock)
                    view.charSet(".upper", ".lower")
                    
                    return
                }
            })
        }

        let lightButtonlist = document.querySelectorAll(".light-button")

        for(let i = 0; i < lightButtonlist.length; i++)
        {
            lightButtonlist[i].addEventListener("click", function() {
                let targetList = document.querySelectorAll(".changeable")

                if(viewMode === "light")
                {
                    view.changeViewMode(targetList, "--light", "--night")
                    viewMode = "night"
                    this.innerHTML = "&#9728;"
                }
    
                else
                {
                    view.changeViewMode(targetList, "--night", "--light")
                    viewMode = "light"
                    this.innerHTML = "&#9790;"
                }
            })
        }
    }
}

app.init()