<!--edited Chris Qiao -->
angular.module('weather.controllers', ['ionic'])
.constant('FORECASTIO_KEY', '14e723fbe931ee119ade496aabcf28ba')
.controller('HomeCtrl', function($scope,$state,Weather,DataStore) {
    $scope.city  = DataStore.city;
    var latitude  =  DataStore.latitude;
    var longitude = DataStore.longitude;

    Weather.getCurrentWeather(latitude,longitude).then(function(resp) {
      $scope.current = resp.data;
      $scope.hdata = [$scope.current.hourly.data[6],$scope.current.hourly.data[12],$scope.current.hourly.data[18],$scope.current.hourly.data[24]];
      $scope.days = $scope.current.daily.data;
      console.log('GOT CURRENT', $scope.current);
    }, function(error) {
      alert('Unable to get current conditions');
      console.error(error);
    });


})
.controller('WeekCtrl', function($scope){})
.controller('CityCtrl', function($scope,$state, Cities,DataStore) {
  $scope.cities = Cities.all();

  $scope.changeCity = function(cityId) {
    var lat  = $scope.cities[cityId].lat;
    var lgn  = $scope.cities[cityId].lgn;
    var city = $scope.cities[cityId].name;

    DataStore.setCity(city);
    DataStore.setLatitude(lat);
    DataStore.setLongitude(lgn);

    $state.go('tab.home');
  }
})
