import { mergePositions } from "./merge-positions"

const positions = [
    {
        price: 100,
        amount: 1
    },
    {
        price: 80,
        amount: 2
    },
    {
        price: 60,
        amount: 4
    }
]

it('test mergePositions should return {price: 71.43, amount: 7}', () => {
  const result = mergePositions(positions)
  expect(parseFloat(result.price.toFixed(2))).toBe(71.43)
  expect(result.amount).toBe(7)
})