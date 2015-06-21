(function() {

  var app = angular.module('list', [ ]);

  app.controller("ItemController", function(){

      this.item= {};

      this.addItem = function(item){
        list.item.push(this.item);
        this.item = {};
      };
    });

})();