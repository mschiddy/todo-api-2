const {MongoClient, ObjectID} = require('mongodb');

/*generates unique ObjectID for new object each time file runs
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');

	/*db.collection('todos').find({
		_id: new ObjectID('597a205ab1eef93b2128e077')
	}).toArray().then((docs) => {
		console.log('todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	db.collection('todos').find().count().then((count) => {
		console.log(`todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});*/

	db.collection('users').find({name: 'Bob'}).toArray().then((docs) => {
		console.log('users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	//db.close();
});