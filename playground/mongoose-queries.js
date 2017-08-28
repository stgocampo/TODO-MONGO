const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '599f2c3395569f104497a47f11'
// if (!ObjectID.isValid(id)) {
//     console.log('ID no es valido');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('El id no fue encontrado');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('599defa83de212135883745e').then((user) => {
  if (!user) {
    return console.log('No se pudo encontrar el usuario');
  }

  console.log(JSON.stringify(user, undefined, 2));
})
