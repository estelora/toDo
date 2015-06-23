toDo.config(['$routeProvider', function ($routeProvider) {
  //object to define the route
  var routeDefinition = {
    controller: 'DetailController',
    controllerAs: 'detailCtrl',
    templateUrl: 'views/item-detail.html'
  };

  //angular parses that var here
  $routeProvider.when('/items/item-detail/:index', routeDefinition);
}]);

toDo.controller('DetailController', function($routeParams, items) {
  //this is how we got the index of the list object
  //$routeParams is our friend
  
  var listItemIndex = ($routeParams.index);
  this.detailItem = items.data[listItemIndex];
  
  // console.log(this.item);
  // console.log($routeParams);
  // console.log(listItemIndex);
  // console.log(items.data[listItemIndex]);
  

this.return=function() {
  window.history.back();
}

});
