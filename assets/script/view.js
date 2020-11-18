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
            let inputView = document.querySelector(".input-view")
            let newParagraph = document.createElement("p")

            newParagraph.className = "input-view__paragraph paragraph"
            inputView.appendChild(newParagraph)
            resolve()
        })
        
        return promise
    },

    removeParagraph: function() {
        let inputView = document.querySelector(".input-view")
        let paragraphList = document.querySelectorAll(".paragraph")
        let index = paragraphList.length - 1

        inputView.removeChild(paragraphList[index])
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

    ledSet: function(light) {
        let led = document.querySelector(".led")

        if(light)
            led.style.backgroundColor = "#21ab37"

        else
            led.style.backgroundColor = "black"
    }
}