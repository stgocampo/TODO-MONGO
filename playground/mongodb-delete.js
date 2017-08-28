// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No se puede conectar al servidor de MongoDB');
  }
  console.log('Se ha conectado a los servidores de MongoDB');

  //delete many
  // db.collection('Todos').deleteMany({
  //   text: 'Something to do'
  // }).then((result) => {
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({
  //   text: 'Perro caminando'
  // }).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //Challenge
  // 1. delete many
  // db.collection('Users').deleteMany({nombre: 'Santiago Ocampo'}).then((result) => {
  //   console.log(result);
  // })

  // 2. delete one
  db.collection('Users').deleteMany({_id: new ObjectID("599db4cce76526520231adaa")}).then((result) => {
    console.log(result);
  });

  // db.close();

});
