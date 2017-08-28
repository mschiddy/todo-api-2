const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	/*db.collection('todos').deleteMany({text: 'Fly a kite'}).then((result) => {
		console.log(result);
	});*/

	//deleteOne
	db.collection('todos').deleteOne({text: 'Something else to do'}).then((docs) => {
		console.log(docs);
	});
	
	//findOneAndDelete
	/*db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
	console.log(result);
	});*/

	
	/*db.collection('users').deleteMany({name: 'Bob'}).then((result) => {
		console.log(result);
	});*/

	db.collection('todos').findOneAndDelete({_id: 
		new ObjectID("59a2118e3fcc6e1a7c95f209")
	}).then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	});
	

	//db.close();
});