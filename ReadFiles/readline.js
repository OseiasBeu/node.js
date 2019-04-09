let way  = 'index.html'
const readline = require('readline');
const fs = require('fs');
const readable = fs.createReadStream(way);



const rl = readline.createInterface({
  input: readable,
  output: process.stdout
});

rl.on('line',(line)=>{
  console.log('>>>>', line)
});
