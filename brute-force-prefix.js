const crypto = require('crypto');

const prefix = '100xdevs';
let input = 0;
while(true){
    let finalStr = prefix+input;
    let  hash = crypto.createHash('sha256').update(finalStr).digest('hex');
    if(hash.startsWith("00000")) break;
    input ++;
}
console.log(input);

