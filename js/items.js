
toDo.config('$routeProvider', function($routeProvider){
  //object to define the route
  var routeDefinition = {
    controller: 'ItemsController',
    controllerAs: 'ItemsCtrl',
    templateUrl: 'views/items.html'
  }

  //parsing the route
  $routeProvider.when('/', routeDefinion);
  $routeProvider.when('/items', routeDefinition);

});

//list of items data, starting with one item
toDo.factory("items", function () {
  
  var items = {};
  
  items.data = [{
    id: "1",
    title: "Make a list"
  }];
  
  return items;
});

  /*controller for all items in the list
   * add an item
   delete an item */
 toDo.controller('ItemsController', function(items) {
  this.items = items;

  this.deleteItem = function (index) {
    items.data.splice(index, 1);
  };
  
  this.addItem = function () {
    
    items.data.push({
     
      id: this.items.data.length + 1,
      title: this.newItemName
   
    });

    this.newItemName = '';
  };
});
