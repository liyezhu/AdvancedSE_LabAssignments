angular.module('app.controllers', [])
  
.controller('assignment5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
function check() {

        // stored data from the register-form
        var storedName = localStorage.getItem('userName');
        var storedPassword = localStorage.getItem('userPassword');

        // entered data from the login-form
        var userName = document.getElementById('userName');
        var userPassword = document.getElementById('userPassword');

        // check if stored data from register-form is equal to data from login form
        if(userName.value !== storedName || userPassword.value !== storedPassword) {
            document.getElementById("error_message").innerHTML="Invalid credentials. Please try again ";
            //alert('ERROR');
        }else {
            self.location="appHome.html";
            //window.navigate("directions.html");
        }
    }

}])
   
.controller('registerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
var userName = document.getElementById('userName');
    var userPassword = document.getElementById('userPassword');

    // storing input from register-form
    function store() {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userPassword', userPassword.value);
        self.location="assignment5.html";
        //window.navigate("LoginPage.html");
        //alert("back");
        //window.history.back(-1);
    }

}])
   
.controller('appHomeCtrl', function($scope, $http){
    $scope.videos = [];

    $scope.youtubeParams = {
      key: 'AIzaSyDpyT6qTD9Ql3WcG62wYkjqLdq9IRpmPrA',
      type: 'video',
      maxResults: '6',
      part: 'id,snippet',
      order: 'date',
      channelId: 'UCeI5UUTe_3kIVNxDqgcnFEg',
    }

    $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
      angular.forEach(response.items, function(child){
       // console.log (child);
           $scope.videos.push(child);
      });
    });
    
  });