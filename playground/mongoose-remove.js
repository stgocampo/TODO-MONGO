const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove, elimina todos los parametros que coincidan con la consulta
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '599f2c3395569f104497a47f'}).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('599f2c3395569f104497a47f').then((todo) => {
  console.log(todo);
})
