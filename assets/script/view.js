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
    }
}