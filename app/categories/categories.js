/**
 * Created by enrique1 on 1/2/15.
 */
angular.module('categories', [
  'eggly.models.categories'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('eggly.categories', {
        url: '/',
        views: {
          'categories@': {
            url: '/',
            templateUrl: 'categories/categories.template.html',
            controller: 'CategoriesController as categoriesCtrl'
          },
          'bookmarks@': {
            url: '/',
            templateUrl: 'categories/bookmarks/bookmarks.template.html',
            controller: 'BookmarksController as bookmarksCtrl'
          }
        }
    });
  })
  .controller('CategoriesController' , function(CategoriesModel) {
    var categoriesCtrl = this;
    categoriesCtrl.categories = CategoriesModel.getCategories();
  });
