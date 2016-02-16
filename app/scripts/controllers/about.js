'use strict';

/**
 * @ngdoc function
 * @name workersMapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workersMapApp
 */
angular.module('workersMapApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
