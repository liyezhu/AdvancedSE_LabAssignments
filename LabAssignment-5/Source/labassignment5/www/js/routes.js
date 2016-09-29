angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('assignment5', {
    url: '/page1',
    templateUrl: 'templates/assignment5.html',
    controller: 'assignment5Ctrl'
  })

  .state('register', {
    url: '/page2',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('appHome', {
    url: '/page3',
    templateUrl: 'templates/appHome.html',
    controller: 'appHomeCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});