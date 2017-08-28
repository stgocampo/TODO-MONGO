// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No se puede conectar al servidor de MongoDB');
  }
  console.log('Se ha conectado a los servidores de MongoDB');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID("599db3efe76526520231ad53") },
  //   { $set:{
  //     completed: true
  //   } },
  //   { returnOriginal: false })
  // .then((result) => {
  //   console.log(result);
  // });

  // Challenge
  // update name and increment
  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID("599dbb38e76526520231aefa")},
    {
      $set: {
        nombre: "Jhonatan"
      },
      $inc: {
        edad: 1
      }
    },
    { returnOriginal: false})
    .then((result) => {
      console.log(result);
    })

  // db.close();

});
