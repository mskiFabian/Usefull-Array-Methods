//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseList(arr) {
    let reverse = arr.reverse()
    return reverse
}
console.log(reverseList([1,2,3,4]))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function squareAndCubes(a,b) {
    let sumOfSquare = a.reduce((sum, element) => sum + element * element, 0)
    let sumOfCubes = b.reduce((sum, element) => sum + element * element * element, 0)

    return  sumOfCubes < sumOfSquare
}
console.log(squareAndCubes([2,6,2], [2,2,2]))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultipy(arr) {
    return arr.filter((el, i) => el % i === 0)
}
console.log(isMultipy([22, -6, 32, 82, 9, 25]))



//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfValues(arr) {
    return arr.reduce((acc, currVal) => acc + Number(currVal))
}
console.log(sumOfValues([3,2,'3']))


