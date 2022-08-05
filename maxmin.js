

function summaxMin(num1 , num2 , num3 ,num4, num5){
    let arr = [num1 , num2 , num3 ,num4, num5]
    let sum =Math.max(...arr) + Math.min(...arr)

      return sum
}
console.log(summaxMin(100, 100, -200, 300, 0))
console.log(summaxMin(1, 3, 2, 4, 5))
console.log(summaxMin(-1000, -2000, -10, -120, -60))



    