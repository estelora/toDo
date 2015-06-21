(function() {

  var app = angular.module('toDo', [ ]);
  
  app.controller('ListController', function(){
    this.list = items;

  });

  var items = [

    {
      complete: false,
      text: 'Make a list'
    },

    {
      complete: false,
      text: 'Forget something'
    }

  ];

})();