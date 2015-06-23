var toDo = angular.module('toDo', ['ngRoute']);

//Create our 404 handler
toDo.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    controller: 'Error404Ctrl',
    controllerAs: 'vm',
    templateUrl: 'errors/404/error-404.html'
  });
}]);

