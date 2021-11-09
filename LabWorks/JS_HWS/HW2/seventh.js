let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing']

const answerList = items.map(element => {

    if(Number.isInteger(element)) {
        element = element * element
    }
    else if(typeof element === 'string') {
        element = element.toUpperCase()
    }

    return element

})

console.log(answerList)