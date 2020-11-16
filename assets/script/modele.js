export let modele = {
    inputList: [],

    addInput: function(userInput) {
        const promise = new Promise((resolve) => {
            this.inputList.push(userInput)
            console.log(this.inputList)
            resolve(this.inputList)
        })

        return promise
    },

    removeInput: function() {
        const promise = new Promise((resolve) => {
            this.inputList.pop()
            console.log(this.inputList)
            resolve(this.inputList)
        })

        return promise
    }
}