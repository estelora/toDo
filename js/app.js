var toDo = angular.module("toDo", ['ngRoute']);

//Create our 404 handler
toDo.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    controller: 'Error404Ctrl',
    controllerAs: 'vm',
    templateUrl: 'errors/404/error-404.html'
  });
}]);

toDo.factory("items", function () {
    var items = {};
    items.data = [{
        id: "1",
        title: "Make a list" 
    }];
    return items;
});

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