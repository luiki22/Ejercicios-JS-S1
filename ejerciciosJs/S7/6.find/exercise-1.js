const numbers = [32, 21, 63, 95, 100, 67, 43];

const number = numbers.find(function(number){
    return number === 100;
})
console.log(number)