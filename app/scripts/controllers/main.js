'use strict';

/**
 * @ngdoc function
 * @name egglyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the egglyApp
 */
angular.module('egglyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
