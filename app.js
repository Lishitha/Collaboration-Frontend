//<!--ngRoute is build in module in angular js used for navigation (ModelAndView) -->
var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
	  $routeProvider
//<!--http://localhost:8081/CollaborationFrontEnd/ -->
	  .when('/', {
	    templateUrl : 'c_home/Home.html',
	    controller  : 'HomeController'
	  })
	  
//	    .when('/job_opportunities', {
//	    templateUrl : 'c_job/Job.html',
//	    controller  : 'JobController'
//	  })
	  
//	   .when('/manageUser', {
//	    templateUrl : 'c_admin/manage_users.html',
//	    controller  : 'AdminController'
//	  })
//	  
//
//	  .when('/blog', {
//	    templateUrl : 'c_blog/blog.html',
//	    controller  : 'BlogController'
//	  })
//	  
//	  
//	  .when('/event', {
//	    templateUrl : 'c_event/event.html',
//	    controller  : 'EventController'
//	  })
//
//	  .when('/about', {
//	    templateUrl : 'c_about/about.html',
//	    controller  : 'AboutController'
//	  })
//	  
	   .when('/login', {
	    templateUrl : 'c_login/Login.html',
	    controller  : 'LoginController'
	  })
	  
	   .when('/register', {
	    templateUrl : 'c_register/Register.html',
	    controller  : 'RegisterController'
	  })

	  .otherwise({redirectTo: '/'});
	});

















//var app = angular.module('myApp',['ngRoute']);
//
//app.controller('HomeController',function($scope){
//	$scope.message = "hiiiiiiiiiiiiiiiiiiiiiiii";
//});
//
//app.config(function($routeProvider){
//	$routeProvider
//	
//	.when('/',{
//		templateUrl : 'c_home/Home.html',
//		controller  : 'HomeController' 
//	})
//	
////	.when('/job_oppertunities',{
////		templateUrl : 'c_job/job.html',
////		controller  : 'JobController' 
////	})
////	
////	.when('/manageUser',{
////		templateUrl : 'c_admin/manage_user.html',
////		controller  : 'AdminController' 
////	})
////	
////	.when('/blog',{
////		templateUrl : 'c_blog/blog.html',
////		controller  : 'BlogController' 
////	})
////	
////	.when('/event',{
////		templateUrl : 'c_event/event.html',
////		controller  : 'EventController' 
////	})
////	
////	.when('/about',{
////		templateUrl : 'c_about/about.html',
////		controller  : 'JobController' 
////	})
//	
//	.when('/login',{
//		templateUrl : 'c_user/Login.html',
//		controller  : 'UserController' 
//	})
//	
//	.when('/register',{
//		templateUrl : 'c_user/Register.html',
//		controller  : 'RegisterController' 
//	})
//}
//		)




