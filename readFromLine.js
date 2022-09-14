const readline = require('readline')
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Please Enter Your Name: ',(answer) => {
    console.log(answer)
    r1.close();
})