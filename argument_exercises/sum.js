function sum(num1, ...othernums) {
    let total = num1
    othernums.forEach((ele) => {
        total += ele;
    });
    return total
}

console.log(sum(1, 2, 3, 4))
console.log(sum(1, 2, 3, 4, 5))