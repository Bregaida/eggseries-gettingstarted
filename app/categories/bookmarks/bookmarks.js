/**
 * Created by enrique1 on 1/2/15.
 */
angular.module('categories.bookmarks', [
  'eggly.models.categories',
  'eggly.models.bookmarks',
  'categories.bookmarks.create',
  'categories.bookmarks.edit'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('eggly.categories.bookmarks', {
        url: 'categories/:category',
        views: {
          'bookmarks@': {
            templateUrl: 'categories/bookmarks/bookmarks.template.html',
            controller: 'BookmarksController'
          }
        }
      });
  })
  .controller('BookmarksController', function($scope, $stateParams) {
    $scope.currentCategoryName = $stateParams.category;
  });
