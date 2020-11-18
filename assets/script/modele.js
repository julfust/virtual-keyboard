export let modele = {
    inputList: [],

    addInput: function(userInput, uppercase) {
        const promise = new Promise((resolve) => {
            if(uppercase)
            {
                this.inputList.push(userInput.toUpperCase())
            }

            else {
                this.inputList.push(userInput)
            }
            
            resolve(this.inputList)
        })

        return promise
    },

    removeInput: function() {
        const promise = new Promise((resolve) => {
            let data = {}
            
            data.char = this.inputList.pop()
            data.inputList = this.inputList
            resolve(data)
        })

        return promise
    }
}