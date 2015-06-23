toDo.config(['$routeProvider', function ($routeProvider) {
  //object to define the route
  var routeDefinition = {
    controller: 'DetailController',
    controllerAs: 'detailCtrl',
    templateUrl: 'views/item-detail.html'
  };

  //angular parses that var here
  $routeProvider.when('items/:index', routeDefinition);
}]);


self.cancel=function() {
  window.history.back();
}