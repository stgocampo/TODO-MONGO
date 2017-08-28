// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('No se puede conectar al servidor de MongoDB');
  }
  console.log('Se ha conectado a los servidores de MongoDB');

  // db.collection('Todos').insertOne({
  //   text: 'Algo para hacer',
  //   completado: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('No se puede insertar el todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  // Insertar un nuevo documento dentro de usuarios(nombre, edad, locación)
  db.collection('Users').insertOne({
    nombre: 'Santiago Ocampo',
    edad: 27,
    locacion: 'Medellín - Colombia'
  }, (err, result) => {
    if (err) {
      return console.log('No se pudo registrar el usuario', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();

});
