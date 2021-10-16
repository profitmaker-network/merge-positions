interface Position {
    price: number,
    amount: number
}

export const mergePositions = ( positions: Position[] ): Position => {
    var sumOfTotals = 0
    var sumOfShares = 0
    for (let order of positions ) {
        sumOfTotals = sumOfTotals + (order.price * order.amount)
        sumOfShares = sumOfShares + order.amount
    }
    var weightedPrice = sumOfTotals / sumOfShares
    return { price: weightedPrice, amount: sumOfShares }
}