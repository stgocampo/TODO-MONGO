const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = "123abc!";
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   })
// })

var hashedPassword= '$2a$10$lLmHJp20YbHHwenh4Neuqesk8sJoKhQ/RasK6EnXN3vm6almbfyeO';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})

// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, '123')
// console.log(token);
//
// var decoded = jwt.verify(token, '123')
// console.log('decoded', decoded);
// var mensaje = 'Soy el usuario numero 3';
// var hash = SHA256(mensaje).toString();
//
// console.log(`Mensaje: ${mensaje}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secretos').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'secretos').toString();
// if (resultHash === token.hash) {
//   console.log('Los datos no fueron cambiados');
// } else {
//   console.log('Los datos fueron cambiados, no confíes');
// }
