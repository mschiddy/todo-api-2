const {ObjectID} = require('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
	console.log(result);
});*/

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('59a4730d6ae6e0153465a08b').then((todo) => {
	console.log(todo);
});