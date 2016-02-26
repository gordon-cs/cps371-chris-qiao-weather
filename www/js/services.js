//modified by Chris Qiao
angular.module('weather.services', ['ngResource'])
'use strict';
/*
var forecastioWeather = ['$q', '$resource', '$http', 'FORECASTIO_KEY',
  function($q, $resource, $http, FORECASTIO_KEY) {
  var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

  return {
    getCurrentWeather: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    }
  };
}];
*/
var forecastioWeather = ['$q', '$resource', '$http', 'FORECASTIO_KEY',
  function($q, $resource, $http, FORECASTIO_KEY) {
  var url = 'http://super-weatherproxy.appspot.com/';

  return {
    getCurrentWeather: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    }
  };
}];
weatherApp.factory('Cities', function() {
var cities = [
    { id: 0, name: 'Wenham', lat:42.589611 , lgn: -70.819806 },
    { id: 1, name: 'New York' ,lat: 40.7127 , lgn: 74.0059 },
    { id: 2, name: 'London' ,lat:51.5072 , lgn: 1.1275 },
    { id: 3, name: 'Los Angeles' ,lat: 34.0500 , lgn: 118.2500 },
    { id: 4, name: 'Dallas' ,lat: 32.7758 , lgn:96.7967  },
    { id: 5, name: 'Frankfurt' ,lat:50.1117 , lgn: 8.6858 },
    { id: 6, name: 'New Delhi' ,lat:28.6100 , lgn: 77.2300 }
  ];

  return {
    all: function() {
      return cities;
    },
    get: function(cityId) {
      return cities[cityId];
    }
  };
})
weatherApp.factory('DataStore', function() {
    var DataStore = {
        city:       'Wenham',
        latitude:   42.589611,
        longitude:  -70.819806 };

    DataStore.setCity = function (value) {
       DataStore.city = value;
    };

    DataStore.setLatitude = function (value) {
       DataStore.longitude = value;
    };

    DataStore.setLongitude = function (value) {
       DataStore.longitude = value;
    };

    return DataStore;
})
weatherApp.factory('Weather', forecastioWeather);
