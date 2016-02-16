'use strict';

/**
 * @ngdoc function
 * @name workersMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workersMapApp
 */
angular.module('workersMapApp')
  .controller('MainCtrl', ['$scope', 'DataService', function($scope, DataService) {

    $scope.usersLabels = [];
    $scope.channels = [];
    $scope.usersScores = [];
    DataService.loadUsersData().then(function(data) {
      $scope.usersLabels = Object.keys(data.data.HGETALL);

      $scope.usersScores = [$scope.usersLabels.map(function(x) {
        return data.data.HGETALL[x];
      })]
    });
    DataService.loadChannelsData().then(function(data) {
      $scope.channelsLabels = Object.keys(data.data.HGETALL);

      $scope.channelScores = [$scope.channelsLabels.map(function(x) {
        return data.data.HGETALL[x];
      })]
    });
    //$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    /*
    $scope.colours =  [{
        fillColor: 'rgba(47, 132, 71, 0.8)',
        strokeColor: 'rgba(47, 132, 71, 0.8)',
        highlightFill: 'rgba(47, 132, 71, 0.8)',
        highlightStroke: 'rgba(47, 132, 71, 0.8)'
    }];*/


  }]);
