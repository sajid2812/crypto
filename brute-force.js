const crypto = require('crypto');

let input = 0;
while(true){
    let  hash = crypto.createHash('sha256').update(String(input)).digest('hex');
    if(hash.startsWith("00000")) break;
    input ++;
}
console.log(input);

