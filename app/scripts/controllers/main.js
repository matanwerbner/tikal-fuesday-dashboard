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

    /*
    //DataService.loadData();
    $scope.d3data = DataService.graphData;
    $scope.d3data = [{
      name: 'Greg',
      score: 48
    }, {
      name: 'Ari',
      score: 75
    }, {
      name: 'Q',
      score: 96
    }, {
      name: 'Loser',
      score: 98
    }];

    $scope.d3Moleculedata = {
      nodes: [{
        "name": "C",
        "size": 12
      }, {
        "name": "C",
        "size": 12
      }, {
        "name": "C",
        "size": 12
      }, {
        "name": "N",
        "size": 14
      }, {
        "name": "H",
        "size": 1
      }, {
        "name": "O",
        "size": 16
      }, {
        "name": "O",
        "size": 16
      }, {
        "name": "H",
        "size": 1
      }, {
        "name": "H",
        "size": 1
      }, {
        "name": "H",
        "size": 1
      }, {
        "name": "H",
        "size": 1
      }, {
        "name": "H",
        "size": 1
      }, {
        "name": "H",
        "size": 1
      }],
      links: [{
        "source": 0,
        "target": 1,
        "bond": 1
      }, {
        "source": 1,
        "target": 2,
        "bond": 1
      }, {
        "source": 1,
        "target": 3,
        "bond": 1
      }, {
        "source": 2,
        "target": 5,
        "bond": 2
      }, {
        "source": 2,
        "target": 6,
        "bond": 1
      }, {
        "source": 1,
        "target": 4,
        "bond": 1
      }, {
        "source": 3,
        "target": 10,
        "bond": 1
      }, {
        "source": 3,
        "target": 11,
        "bond": 1
      }, {
        "source": 0,
        "target": 7,
        "bond": 1
      }, {
        "source": 0,
        "target": 8,
        "bond": 1
      }, {
        "source": 0,
        "target": 9,
        "bond": 1
      }, {
        "source": 5,
        "target": 12,
        "bond": 1
      }]
    };

    $scope.clickEventOnScope = function(item) {
      console.log(item.name);
    };
*/
  }]);
