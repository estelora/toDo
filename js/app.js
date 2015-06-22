(function() {

  var app = angular.module('list', [ ]);

  app.controller('ListController', function(){
    this.items = items;

    this.items.push( 
      {
        complete: false,
        text: 'hi'
      }
    )
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