export let modele = {
    inputList: [],
    uppercase: false,

    addInput: function(userInput, shift, uppercase) {
        const promise = new Promise((resolve) => {
            if(this.uppercase && userInput != "")
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
    },

    setMajMode: function(shift, capsLock) {
        if(!shift && !capsLock)
            this.uppercase = false

        else
            this.uppercase = true
    }
}