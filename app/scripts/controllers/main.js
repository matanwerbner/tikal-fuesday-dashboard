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



    $scope.usersLabels =[];
    $scope.channels =[];
     $scope.usersScores= [];
    
    DataService.loadData().then(function(data){
    //  debugger;
    
        $scope.usersLabels = data.data.users.map(function(d){
            return d.name;
        })
        
        $scope.usersScores = [data.data.users.map(function(d){
            return parseInt(d.count);
        })];
        
        $scope.channelsLabels = data.data.channels.map(function(d){
            return d.name;
        })
        
        $scope.channelScores = [data.data.channels.map(function(d){
            return parseInt(d.count);
        })];
        
        //debugger;
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
