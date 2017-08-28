// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No se puede conectar al servidor de MongoDB');
  }
  console.log('Se ha conectado a los servidores de MongoDB');

  // db.collection('Todos').find({
  //   _id: new ObjectID("599cb924e765265202319c9a")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('No se pudieron consultar las actividades', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Cantidad de todos: ${count}`);
  }, (err) => {
    console.log('No se pudo consultar la totalidad de las actividades', err);
  });

  // db.close();

});
