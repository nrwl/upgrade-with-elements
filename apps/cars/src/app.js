(function() {
  var app = angular.module('cars-app', []);

  app.component('cars',  {
    controller: function () {
      this.cars = ['BMW', 'Mercedes-Benz', 'Lamborghini', 'Ferrari', 'Maserati'];
    },
    templateUrl: './app.html'
  });

})()
