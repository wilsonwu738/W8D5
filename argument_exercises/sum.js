function sum(num1, ...othernums) {
    let total = num1
    othernums.forEach(function (ele) {
      total += ele;
    })
    return total;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5))


function sum(nums) {
  let total = 0
  let args = Array.prototype.slice.call(arguments); //make a copy of arguments and make that as an array
  args.forEach(function (ele) {
    total += ele;
  })
  return total;
}

console.log(sum(10, 2, 15, 4));