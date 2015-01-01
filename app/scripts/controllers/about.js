'use strict';

/**
 * @ngdoc function
 * @name egglyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the egglyApp
 */
angular.module('egglyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
