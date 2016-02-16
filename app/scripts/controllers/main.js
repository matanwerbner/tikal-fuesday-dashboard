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

    var json =[{
        name: 'user1',
        count: 2
    },{
        name: 'user2',
        count:3
    }];

    DataService.loadData().then(function(data){
      debugger;
    });
     $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];


  $scope.data = [
    [28, 48, 40, 19, 42, 27, 50]
  ];

  }]);
