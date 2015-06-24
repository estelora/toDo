toDo.config(function($routeProvider){
  //object to define the route
  var routeDef= {
    controller: 'ItemsController',
    controllerAs: 'itemCtrl',
    templateUrl: 'views/items.html'
  }

  //parsing the route
  $routeProvider.when('/', routeDef);
  $routeProvider.when('/items', routeDef);

});

//list of items data, starting with one item
toDo.factory('items', function () {

  var items = {};

  items.data = [{
    id: '1',
    title: 'Make a list',
    complete: false
  }];

  return items;
});

   // controller for all items in the list
   // add an item
   // delete an item
   // mark item as complete and update model
   toDo.controller('ItemsController', function(items) {
    this.items = items;

    this.getId = function (index) {
      var arrayOfItems = items.data;

    }

    this.deleteItem = function (index) {
      items.data.splice(index, 1);
    };

    this.addItem = function () {

      items.data.push({

        id: this.items.data.length + 1,
        title: this.newItemName,
        complete: false

      });

      this.newItemName = '';
    };

    this.completeItem = function(index) {
    var completeItem = items.data[index];
      //toggle boolean value
      items.data[index].complete = !items.data[index].complete;

      console.log(items.data);
      console.log(completeItem);
      };
    });
