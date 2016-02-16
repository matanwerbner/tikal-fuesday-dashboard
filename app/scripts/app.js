'use strict';

/**
 * @ngdoc overview
 * @name workersMapApp
 * @description
 * # workersMapApp
 *
 * Main module of the application.
 */
angular
  .module('workersMapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'd3'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

/*
 *
 * A D3 BarChart Directive.
 * Get the D3 Factory service injected from the d3 module (returns the promise of the )
 */

.directive('d3Barchart', ['d3Service', function(d3Service) {
  return {
    restrict: 'EA',
    scope: { //isolate scope in the directive so all instances won't share the same data
      data: '=', // bi-directional data-binding
      onClick: '&' //parent execution binding
    },
    link: function(scope, element, attrs) {
      //call the D3 function that returns the defer's promise object and run the code on 'then'
      d3Service.d3().then(function(d3) {

        // get the graph's orientation (horizontal as default)
        var graphOrientation = attrs.orientation || 'horizontal';

        // Allow the user to define the bar margin, height/width and padding
        var margin = parseInt(attrs.margin) || 20,
          barHeight = parseInt(attrs.barHeight) || 20,
          barWidth = parseInt(attrs.barWidth) || 20,
          barPadding = parseInt(attrs.barPadding) || 5;

        // d3 is the raw d3 object
        var svg = d3.select(element[0])
          .append('svg')
          .style((graphOrientation === 'horizontal') ? 'width' : 'height', '100%');

        //Browser onresize event
        window.onresize = function() {
          scope.$apply();
        };

        //watch window resize - run the scope.renderFunction
        scope.$watch(function() {
          return angular.element(window)[0].innerWidth;
        }, function() {
          scope.render(scope.data);
        });

        // watch for data changes and re-render
        scope.$watch('data', function(newVals, oldVals) {
          oldVals = oldVals;
          return scope.render(newVals);
        }, true);

        scope.render = function(data) {
          // remove all previous items before render
          svg.selectAll('*').remove();

          // If no data was passed, return out of the element
          if (!data) {
            return;
          }

          // setup variables
          var width = (graphOrientation === 'horizontal') ? d3.select(element[0]).node().offsetWidth - margin : scope.data.length * (barWidth + barPadding),
            // calculate the height
            height = (graphOrientation === 'horizontal') ? scope.data.length * (barHeight + barPadding) : d3.select(element[0]).node().offsetHeight - margin;

          // Use the category20() scale function for multicolor support
          var color = d3.scale.category20b(),
            // xoryScale
            xoryScale = d3.scale.linear()
            .domain([0, d3.max(data, function(d) {
              return d.score;
            })])
            .range([0, (graphOrientation === 'horizontal') ? width : height]);


          // set the height and width based on the calculations above
          svg.attr((graphOrientation === 'horizontal') ? 'height' : 'width', '100%');


          //--create the rectangles for the bar chart --
          svg.selectAll('rect')
            .data(data).enter()
            .append('rect')
            .on('click', function(d) {
              return scope.onClick({
                item: d
              });
            })
            .attr('height', (graphOrientation === 'horizontal') ? barHeight : 0)
            .attr('width', (graphOrientation === 'horizontal') ? 140 : barWidth)
            .attr('x', (graphOrientation === 'horizontal') ? Math.round(margin / 2) : function(d, i) {
              return i * (barWidth + barPadding);
            })
            .attr('y', (graphOrientation === 'horizontal') ? function(d, i) {
              return i * (barHeight + barPadding);
            } : function(d) {
              console.log(height);
              return height - xoryScale(d.score);
            })
            //color fill
            .attr('fill', function(d) {
              return color(d.score);
            })
            //fill in animation in each render
            .transition()
            .duration(1000)
            .attr((graphOrientation === 'horizontal') ? 'width' : 'height', function(d) {
              return xoryScale(d.score);
            });

          //-- create the labels for the bar chart  --
          svg.selectAll('text')
            .data(data).enter()
            .append('text')
            .attr('fill', '#fff')
            .attr('x', (graphOrientation === 'horizontal') ? 15 : function(d, i) {
              //console.log(this.getComputedTextLength());
              return (i * (barWidth + barPadding)) + 4;
            })
            .attr('y', (graphOrientation === 'horizontal') ? function(d, i) {
              return i * (barHeight + barPadding) + (barHeight - 5);
            } : height - 5)
            .text(function(d) {
              return d.name;
            });

        };
      }); //end of promise's then function
    }
  };
}])

/*
 *
 * A D3 Molocule Diagram Directive.
 * Get the D3 Factory service injected from the d3 module (returns the promise of the )
 */
.directive('d3Molucole', ['d3Service', function(d3Service) {
  return {
    restrict: 'EA',
    scope: { //isolate scope in the directive so all instances won't share the same data
      data: '=', // bi-directional data-binding
      onClick: '&' //parent execution binding
    },
    link: function(scope, element, attrs) {
      //call the D3 function that returns the defer's promise object and run the code on 'then'
      d3Service.d3().then(function(d3) {

        // Allow the user to define the bar margin, height/width and padding
        var margin = parseInt(attrs.margin) || 20;

        // d3 is the raw d3 object
        var svg = d3.select(element[0])
          .append('svg')
          .attr("width", '100%')
          .attr("height", '100%');

        //Browser onresize event
        window.onresize = function() {
          scope.$apply();
        };

        //watch window resize - run the scope.renderFunction
        scope.$watch(function() {
          return angular.element(window)[0].innerWidth;
        }, function() {
          scope.render(scope.data);
        });

        // watch for data changes and re-render
        scope.$watch('data', function(newVals, oldVals) {
          oldVals = oldVals;
          return scope.render(newVals);
        }, true);

        scope.render = function(data) {
          console.log("data: " + data.nodes);
          // remove all previous items before render
          svg.selectAll('*').remove();

          // If no data was passed, return out of the element
          if (!data) {
            return;
          }

          // setup variables
          var width = d3.select(element[0]).node().offsetWidth - margin,
            // calculating height
            height = d3.select(element[0]).node().offsetHeight - margin,
            // category20() scale function for multicolor support
            color = d3.scale.category10(),
            // radius scaling
            radius = d3.scale.sqrt()
            .range([0, 6]),

            force = d3.layout.force()

          .on("tick", tick)
            .size([width, height])
            .charge(-600)
    .gravity(0.2)
    .theta(0)
    .alpha(0.1)
         
            .linkDistance(function(d) {
              return radius(d.source.size) + radius(d.target.size) + 20;
            });
          
          force
            .nodes(data.nodes)
            .links(data.links)
            .start();
            
          var link = svg.selectAll(".link")
            .data(data.links)
            .enter().append("g")
            .attr("class", "link");

          link.append("line")
            .style("stroke-width", function(d) {
              return (d.bond * 2 - 1) * 2 + "px";
            });

          link.filter(function(d) {
              return d.bond > 1;
            }).append("line")
            .attr("class", "separator");

          var node = svg.selectAll(".node")
            .data(data.nodes)
            .enter().append("g")
            .attr("class", "node")
          .on('click', function(d) {
            return scope.onClick({
              item: d
            });
          })
          
          //.call(force.drag);
          node.append("circle")
            .attr("r", function(d) {
              return radius(d.size);
            })
            .style("fill", function(d) {
              return color(d.name);
            });

          node.append("text")
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text(function(d) {
              return d.name;
            });

          function tick() {
            link.selectAll("line")
              .attr("x1", function(d) {
                return d.source.x;
              })
              .attr("y1", function(d) {
                return d.source.y;
              })
              .attr("x2", function(d) {
                return d.target.x;
              })
              .attr("y2", function(d) {
                return d.target.y;
              });

            node.attr("transform", function(d) {
              return "translate(" + d.x + "," + d.y + ")";
            });
          }

        };
      }); //end of promise's then function
    }
  };
}]);;
