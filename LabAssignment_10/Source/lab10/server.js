var express = require('express');
var app = express();

var collection = null;

var ObjectID = require('mongodb').ObjectID;

app.use(express.static('./public/'));

app.get('/get', function(req, res){

	collection.find().toArray(function(err, result){ //find = select in SQL

		if(err)
			throw err;
		else
			res.send(JSON.stringify(result));		
	});   
});


app.get('/delete/:s_id',function(req,res){
	var find={};

	if(req.params.s_id)
		find._id = new ObjectID(req.params.s_id);

		collection.remove(find,function(err,result){
			if(err)
				throw err;
			res.send('Delete Success');
		});
});


app.get('/insertSubject/',function(req,res){
	var newData = 
	{
		no : req.query.no,
		firstName : req.query.firstName,
		lastName : req.query.lastName
		
	};

	collection.insert(newData,function(err,result){
		if(err)
			throw err;
		else
			res.send("Insert Success !");
	});
});


app.get('/editSubject/:s_id',function(req,res){
	var find={};
	var newData={};

	if(req.params.s_id){
		find._id = new ObjectID(req.params.s_id);
	}
	if(req.query.no){
		newData.no = req.query.no;
	}
	if(req.query.firstName){
		newData.firstName = req.query.firstName;
	}
	if(req.query.credit){
		newData.credit = req.query.credit;
	}
	if(req.query.lastName){
		newData.lastName = req.query.lastName;
	}

	collection.update(find,{'$set':newData},
		function(err,result){
			if(err)
				throw err;
			else
				res.send("Update success !");
	});
});


// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://mnag:mnag@ds135797.mlab.com:35797/megha123", function(err, db) {
  if(!err) {
  	collection = db.collection('employee_details'); // collection use to update,read,insert,delete
    console.log("We are connected 127.0.0.1");
    app.listen(8088);
  }
  else
  	throw err;
});
