// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
// a) Create a test with expect statements using the variables provided.
//Pseudo code
// Create a describe statement 
describe ("messageCoder", () => {
//     it("takes in a function and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.",  () =>{
//         const secrectCodeWord1 = "Lackadaisical"
//         const secretCodeWord2 = "Gobbledygook"
//         const secretCodeWord3 = "Eccentric"
         
//         expect(messageCoder(secrectCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(messageCoder(secrectCodeWord2)).toEqual("Gobbledygook")
//         expect(messageCoder(secrectCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   SyntaxError: /Users/learnacademy/Desktop/week-5-assessment-ValC001/code-challenges.test.js: Unexpected token, expected "," (24:99)

    22 | // Create a describe statement 
//     23 | describe ("messageCoder", () => {
//   > 24 |     it("takes in a function and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.",  () =>{
//        |                                                                                                    ^
//     25 |         const secrectCodeWord1 = "Lackadaisical"
//     26 |         const secretCodeWord2 = "Gobbledygook"
//     27 |         const secretCodeWord3 = "Eccentric"

//     Test Suites: 1 failed, 1 total
//     Tests:       0 total
//     Snapshots:   0 total
//     Time:        0.875 s
//     Ran all test suites matching /code-challenges.test.js/i.
//     error Command failed with exit code 1.


// b) Create the function that makes the test pass.

























// 2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.


// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// a) Create a test with expects statement using the variable provided.
describe("vowelFavorerer", ()=> {
    it("Takes in an array of words and a single letter and returns an array of all the words containing that particular letter",()=>{
        
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        const letterE = "e"

        expect(vowelFavorerer(letterA)).toEqual("Mango", "Apricot", "Peach")
        expect(vowelFavorerer(letterE)).toEqual("Cherry", "Blueberry", "Peach")
    
    })
 })
// b) Create the function that makes the test pass.

//Psuedo code 
//For this code I can use a similar method to how I did ruby challenge 1. I'll be using sort & include so I can filter out the words based on what I want it to include.
 const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
  function vowelFavorerer(fruitArray){
    const vowelFavorerer = fruitArray.filter(fruitArray => fruitArray.includes('e')).sort();
    return vowelFavorerer
  }

console.log(vowelFavorerer(fruitArray));














//3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
