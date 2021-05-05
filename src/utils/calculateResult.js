const calculateResult = (amountOfMoney, amountToBePaid, valuta) => {

    const sortedNumberValutaArray = valuta.map(item => Number(item)).sort((a, b) => b - a)

    console.log(sortedNumberValutaArray)
    const resultObject = {}

    let change = amountOfMoney - amountToBePaid

    sortedNumberValutaArray.forEach(element => {
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
