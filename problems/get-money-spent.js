// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget.Given price lists for keyboards and USB drives and a budget, find the cost to buy them.If it is not possible to buy both items, return -1.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns

// int: the maximum that can be spent, or -1 if it is not possible to buy both items

function getMoneySpent(keyboards, drives, b) {
  const values = []
  for (let i = 0; i < keyboards.length; i++) {
    for (let x = 0; x < drives.length; x++) {
      const value = keyboards[i] + drives[x]
      if (value <= b) values.push(value)
    }
  }
  return values.length ? Math.max(...values) : -1
}
