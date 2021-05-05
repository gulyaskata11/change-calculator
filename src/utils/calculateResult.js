const calculateResult = (amountOfMoney, amountToBePaid, valuta) => {
    

    const resultObject = {}

    let change = amountOfMoney - amountToBePaid

    valuta.forEach(element => {
        const myElement = Number(element)
        if (change === 0) {
            return 
        }
        const divideResult = Math.floor(change / myElement)
        if (divideResult === 0) {
            return
        }
        resultObject[myElement] = divideResult
        change = change - myElement * divideResult
    })

    return resultObject 
}

export default calculateResult
