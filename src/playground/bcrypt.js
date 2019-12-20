const bcrypt = require('bcrypt');

let password = 'hello';

let hash =  bcrypt.hashSync(password, 10);

console.log(hash);

console.log(bcrypt.compareSync(password, hash));
console.log(bcrypt.compareSync('sdfsdfsd', hash));
