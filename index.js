
function summingTool(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
  console.log(sum)
}

console.log(summingTool([1, 2, 3, 4, 5, 6]))