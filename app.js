// const fs = require('fs')
// fs.writeFileSync('notes.txt','My name is Shiwans Vaishya.')
// fs.appendFileSync('notes.txt','Hello world:-')

// const name = require('./utils.js')
// console.log(name)
// const add = require('./utils.js')
// const sum = add(2,4)
// console.log(sum)

const chalk = require('chalk')
// const validator = require('validator')
const getNotes = require('./notes')
const yargs = require('yargs')
const { describe } = require('node:test')
//package elements can be used likhe this:(1st)
// const msg = getNotes()
// console.log(msg)
// package elements can be used likhe this:(2nd)
// console.log(validator.isEmail('sas@example.com'))
// console.log(validator.isURL('https/mead.io'))




// console.log(chalk.green('Success!'))
// const greenMsg = chalk.inverse.blue.bold.italic('Yup!')
// console.log(greenMsg)
// const command = process.argv[2]
// console.log(process.argv)
// if (command === 'add'){
//     console.log('Adding note!')
// }else if (command === 'remove'){
//     console.log('Removing note!')
// }


//customize yargs version
yargs.version('1.1.0')

//add,remove,read,list...
//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe:'Note title',
            demandOption : true,
            type: 'string',
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }

})
//Remove command
yargs.command( {
    command: 'remove',
    describe: 'Removing a note',
    handler: function(){
        console.log('Removing the note')
    }
})
//List command.
yargs.command({
    command: 'list',
    describe: 'List of Notes:',
    handler: function(){
        console.log('List of all your notes are:')
    }
})
//read command
yargs.command({
    command: 'read',
    describe: 'check the files',
    handler: function(){
        console.log('Reading!')
    }
})


// console.log(yargs.argv)
//substitute
yargs.parse()

