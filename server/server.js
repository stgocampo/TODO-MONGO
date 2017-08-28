const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

// TODOS
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e); //
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET /todos/
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});

  }).catch((err) => {
    if (err) {
      res.status(400).send();
    }
  })
})

app.delete('/todos/:id', (req, res) => {
  // get the id
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});

  }).catch((e) => {
    if (e) {
      res.status(400).send()
    }
  })

})

// UPDATE
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new : true }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({ todo });

  }).catch((e) => {
    if (e) {
      res.status(400).send()
    }
  });
});

//USERS
app.get('/users', (req, res) => {
  User.find().then((user) => {
     res.send({user})
  }, (e) => {
    res.status(400).send(e);
  })
});
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);
  debugger;
  user.save().then(() => {
    return user.generateAuthToken();
  })
  .then((token) => {
    res.header('x-auth', token).send(user);
  })
  .catch((e) => {
    res.status(400).send(e);
  });
});


app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = { app };
