angular.module('todoApp.services', [])
	  .factory('Grades', ['$http', 
	  	function($http){
  		  return{
  		  	
		  	getData:function(callback){
		  		$http.get('/get') // get data after deleted
		  	  	 .success(function(data){
		  	  	 	callback(data);
		  	  	 });
		  	},

		  //--------------------------------------------------------------------------------------------------

			gradeDelete:function(id,callback){
	  			$http.get('/delete/'+id)
	  	  	   	.success(function(data){
	  	  	   	 	callback(data);
	  	  	   	});
	  	  	},

	  	  //--------------------------------------------------------------------------------------------------

		  	addGrade:function(s_no, s_firstName, s_credit, s_lastName, callback){
		  		var dataSubject = {
		  	  		no : s_no,
					firstName : s_firstName,
					lastName : s_lastName
		  	  	};

		  	  	$http.get('/insertSubject',{params:dataSubject})
		  	  	.success(function(data){
		  	  			callback(data);
		  	  		});
		  	},

		  //--------------------------------------------------------------------------------------------------

		  	edit:function(grade, callback){
		  		$http.get('/editSubject/'+grade._id,{params:grade})
		  	  	.success(function(data){
		  	  		callback(data);
		  	  	});				  	
		  	}

		  //--------------------------------------------------------------------------------------------------

		  }
	}
]);