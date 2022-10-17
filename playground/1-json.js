const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Shiwans vaishya'
// }
// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// // const parseData = JSON.parse(bookJSON)
// // console.log(parseData.title)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title )

//challenge
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Shiwans Vaishya"
user.age = 17

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)