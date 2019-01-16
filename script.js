// const students = [
//     {
//         name: "Chris Miller",
//         class: "History",
//         info: "Failed last exam",
//         score: 59
//     },
//     {
//         name: "Courtney Seward",
//         class: "History",
//         info: "Has completed all homework",
//         score: 91
//     },
//     {
//         name: "Garrett Ward",
//         class: "History",
//         info: "Wonderful at helping other students",
//         score: 88
//     },
//     {
//         name: "John Dulaney",
//         class: "History",
//         info: "Has never missed a class or exam",
//         score: 92
//     },
//     {
//         name: "Greg Lawrence",
//         class: "History",
//         info: "Sub-par performance all around",
//         score: 64
//     },
//     {
//         name: "Leah Duvic",
//         class: "History",
//         info: "Wonderful student",
//         score: 97
//     },
//     {
//         name: "Jesse Page",
//         class: "History",
//         info: "Smokes too much. Distracting.",
//         score: 76
//     },
//     {
//         name: "Kevin Haggerty",
//         class: "History",
//         info: "Falls asleep in class",
//         score: 79
//     },
//     {
//         name: "Max Wolf",
//         class: "History",
//         info: "Talks too much",
//         score: 83
//     },
//     {
//         name: "Lissa Goforth",
//         class: "History",
//         info: "Asks pointless, unrelated questions",
//         score: 78
//     },
//     {
//         name: "Tyler Bowman",
//         class: "History",
//         info: "When was the last time he attended class?",
//         score: 48
//     },
//     {
//         name: "Ray Medrano",
//         class: "History",
//         info: "Needs to contribute to in-class discussions",
//         score: 95
//     }
// ]

// const h1 = (...props) => {
//     return `<h1 class="${props[1]}">${props[0]}</h1>`
// }

// const section = (...props) => {
//     return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
// }

// const aside = (...props) => {
//     return `<aside class="${props[1]}">${props[0]}</aside>`
// }

// const genericElement = (...props) => {
//     return `<${props[0]} class="${props[2]}">${props[1]}</${props[0]}>`
// }

// let studentBlock = (...props) => `
//     <div id="student">
//         ${genericElement("h1", props[0], "xx-large" + props[3])}
//         ${genericElement("section" ,props[1], "bordered dashed section--padded "  + props[3])}
//         ${genericElement("aside" ,props[2], "pushRight " + props[3])}
//     </div>
// `
// const container = document.querySelector("#container")
// // container.innerHTML = student("Jim", "red" , "right")

// for (student of students) {
//     let studentComponent = ""
//     if (student.score >= 60) {
//         studentComponent = "passing"
//     } else {
//         studentComponent = "failing"
//     }
//     container.innerHTML += studentBlock(student.name, student.class, student.info, studentComponent)
// }


// const list = document.createElement('ul')

// Create a list item for our list
// const listItem = document.createElement('li')
// listItem.className = "president"
// listItem.textContent = "George Bush"

// Put the list item on the unordered list
// list.appendChild(listItem)

// console.log(list)

alert("You get to choose five words")
let first = prompt("1. Give me a word")
let second = prompt("2. Give me another")
let third = prompt("3. Give me another")
let fourth = prompt("4. Give me another")
let fifth = prompt("5. Give me another")


const messages = document.querySelector("#messages")
const individualMessage1 = document.createElement('section')
individualMessage1.innerHTML = first
individualMessage1.className = "message"
const individualMessage2 = document.createElement('section')
individualMessage2.innerHTML = second
individualMessage2.className = "message"
const individualMessage3 = document.createElement('section')
individualMessage3.innerHTML = third
individualMessage3.className = "message"
const individualMessage4 = document.createElement('section')
individualMessage4.innerHTML = fourth
individualMessage4.className = "message"
const individualMessage5 = document.createElement('section')
individualMessage5.innerHTML = fifth
individualMessage5.className = "message"

// function messagePrint() {  
//     messages.appendChild(individualMessage1)
// }

function messagePrint(mesaggess) {  
    messages.appendChild(mesaggess)
}

let messageArray = [individualMessage1, individualMessage2, individualMessage3, individualMessage4, individualMessage5]

// setTimeout(messagePrint, 1000);
// setTimeout(() => {messagePrint(messageArray[0])}, 1000);
let timerArray = [1000, 2000, 3000, 4000, 5000, 6000]
// setTimeout(() => {messagePrint(messageArray[0])}, timerArray[2]);

for (var i = 0; i < messageArray.length; i++ ) {
    // let j = 0;
    let interval = timerArray[i]
    const currentMessage = messageArray[i]
    
    setTimeout(() => {messagePrint(currentMessage)}, interval)
    
}








// var one = setTimeout(messagePrint(messageArray[0]), 2000)
// var two = setInterval(messagePrint(messageArray[1]), 4000)
// var three = setTimeout(messagePrint(messageArray[2]), 6000)


// for (var i = 0; i < messageArray.length; i++) {
//     function printer () {
//     let message = messageArray[i]
//     messages.appendChild(message)
// }




// messages.appendChild(individualMessage1)