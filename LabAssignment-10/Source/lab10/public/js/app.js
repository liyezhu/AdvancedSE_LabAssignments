angular.module('todoApp', ['todoApp.services'])
  .controller('TodoController', ['$scope','Grades', 
	  function($scope,Grades) 
	  {

	  	  Grades.getData(function(data){
	  	  		$scope.a = data; 
	  	  });
	  	  
	  	  $scope.delete = function(id){
	  	  	Grades.gradeDelete(id,function(data){
	  	  		Grades.getData(function(data){
	  	  			$scope.a = data; 
	  	  		});

	  	  	});
	  	  }

 		  $scope.addSubject = function(s_no, s_firstName, s_credit, s_lastName){
	  	  	Grades.addGrade(s_no, s_firstName, s_credit, s_lastName,function(data){
	  	  		Grades.getData(function(data){
	  	  			$scope.a = data; 
	  	  		});
	  	  	});
		  }

	  	  $scope.edit = function(grade){
	  	  	Grades.edit(grade, function(data){
	  	  		Grades.getData(function(data){
	  	  			$scope.a = data; 
	  	  		});
	  	  	});
	  	  }
	  	 
	  }
]);