interface Position {
    price: number,
    amount: number
}

export const mergePositions = ( positions: Position[] ): Position => {
    let sumOfTotals = 0
    let sumOfShares = 0
    for (let order of positions ) {
        sumOfTotals = sumOfTotals + (order.price * order.amount)
        sumOfShares = sumOfShares + order.amount
    }
    let weightedPrice = sumOfTotals / sumOfShares
    return { price: weightedPrice, amount: sumOfShares }
}