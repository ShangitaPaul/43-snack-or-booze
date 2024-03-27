function unroll(squareArray) {
    for (let i = 0; i < squareArray.length; i++) {
        Array.push(squareArray[0][i])
    };
    for (let j=0; j < squareArray.length; j++) {
        Array.push(squareArray[j][squareArray.length - 1])
        squareArray[j].pop()
    }
    for (let k = squareArray.length - 1; k >= 0; k--) {
        Array.push(squareArray[squareArray.length - 1][k])
    }
    squareArray.pop();
    for (let l = squareArray.length - 1; l >= 0; l--) {
        Array.push(squareArray[l][0])
        squareArray[l].shift()
    }
    if (squareArray.length > 0) {
        return unroll(squareArray.Array)
    }
    return Array
}

module.exports = unroll;