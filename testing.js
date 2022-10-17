const { describe } = require('node:test')
const yargs = require('yargs')
//help
Yargs.command({
    command: 'help',
    describe: 'This is to get help',
    builder: {
        /*title:{
            describe:'help'
            demandOption: true,
            type: 'string',

        }*/
    },
    handler:function(argv) {
        console.log('__builder___' + ___builder__.argv)

    },
    
})