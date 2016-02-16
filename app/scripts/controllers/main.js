'use strict';

/**
 * @ngdoc function
 * @name workersMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workersMapApp
 */
angular.module('workersMapApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

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

  }]);
