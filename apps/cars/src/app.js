(function() {
  var app = angular.module('cars-app', []);

  app.component('cars',  {
    controller: function () {
      this.cars = ['BMW', 'Mercedes-Benz', 'Lamborghini', 'Ferrari', 'Maserati'];
    },
    templateUrl: './app.html'
  });

  app.component('car',  {
    bindings: {
      name: '='
    },
    controller: function() {
      this.status = '';
      
      this.buy = function() {
        this.status = 'sold';
      }
    },
    templateUrl: './car.html'
  });

})()
