const calculateResult = (amountOfMoney, amountToBePaid, valuta) => {
    

    const resultObject = {}

    let change = amountOfMoney - amountToBePaid

    valuta.forEach(element => {
        if (change === 0) {
            return 
        }
        const divideResult = Math.floor(change / element)
        if (divideResult === 0) {
            return
        }
        resultObject[element] = divideResult
        change = change - element * divideResult
    })

    return resultObject 
}

export default calculateResult
