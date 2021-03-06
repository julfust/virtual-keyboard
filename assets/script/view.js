export let view = {
    refreshScreen: function(inputList) {
        let paragraphList = document.querySelectorAll(".paragraph")
        let index = 0
        let content = ""

        for(let i = 0; i < inputList.length; i++)
        {
            if(inputList[i] == "\\n") {
                paragraphList[index].innerHTML = content
                content = ""
                index++
            }

            else {
                content += inputList[i]
            }
        }

        paragraphList[index].innerHTML = content
    },
    
    addParagraph: function() {
        const promise = new Promise((resolve) => {
            let paragraphList = document.querySelectorAll(".paragraph")
            let index = paragraphList.length - 1
            let inputView = document.querySelector(".screen")
            let newParagraph = document.createElement("p")

            paragraphList[index].className = paragraphList[index].className.replace(" paragraph--active", "")

            newParagraph.className = "screen__paragraph paragraph changeable paragraph--light paragraph--active"
            inputView.appendChild(newParagraph)
            resolve()
        })
        
        return promise
    },

    removeParagraph: function() {
        let inputView = document.querySelector(".screen")
        let paragraphList = document.querySelectorAll(".paragraph")
        let index = paragraphList.length - 1

        inputView.removeChild(paragraphList[index])

        index = paragraphList.length - 2

        paragraphList[index].className += " paragraph--active"
    },

    charSet: function(removedTarget, displayedTarget) {
        let removedList = document.querySelectorAll(removedTarget)

        for(let i = 0; i < removedList.length; i++)
        {
            removedList[i].style.display = "none"
        }


        let displayedList = document.querySelectorAll(displayedTarget)

        for(let i = 0; i < displayedList.length; i++)
        {
            displayedList[i].style.display = "block"
        }
    },

    ledSet: function(ledTarget, active) {
        let led = document.querySelector(ledTarget)

        if(active)
            led.style.backgroundColor = "#21ab37"

        else
            led.style.backgroundColor = "black"
    },

    changeViewMode: function(elList, removedMode, displayedMode) {
        for(let i = 0; i < elList.length; i++)
        {
            elList[i].className = elList[i].className.replace(removedMode, displayedMode)
        }
    }
}