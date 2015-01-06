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
            controller: 'BookmarksController as bookmarksCtrl'
          }
        }
      })
      .state('eggly.categories.bookmarks.edit', {
        url: 'categories/bookmarks/edit/:bookmark',
        views: {
          'bookmarks-edit': {
            templateUrl: 'categories/bookmarks/edit/bookmark-edit.template.html',
            controller: 'BookmarksEditController as bookmarksEditCtrl'
          }
        }
      })
      .state('eggly.categories.bookmarks.create', {
        url: 'categories/bookmarks/create/:category',
        views: {
          'bookmarks-create': {
            templateUrl: 'categories/bookmarks/create/bookmark-create.template.html',
            controller: 'BookmarksCreateController as bookmarksCreateCtrl'
          }
        }
      });
  })
  .controller('BookmarksController', function($scope, $stateParams, BookmarksModel, CategoriesModel) {
    var bookmarksCtrl = this;
    bookmarksCtrl.categories = CategoriesModel.getCategories();
    bookmarksCtrl.bookmarks = BookmarksModel.getBookmarks();
    bookmarksCtrl.currentCategory = _(bookmarksCtrl.categories).find( { name: $stateParams.category } );
    bookmarksCtrl.isCreatingOrEditing = false;

    //---------------------------------------------------------
    // CRUD
    //---------------------------------------------------------
    function deleteBookmark(bookmark) {
      _.remove($scope.bookmarks, function (b) {
        return b.id === bookmark.id;
      });
    }

    bookmarksCtrl.deleteBookmark = deleteBookmark;

    function setIsCreatingOrEditing() {
      bookmarksCtrl.isCreatingOrEditing = true;
    }
    bookmarksCtrl.setIsCreatingOrEditing = setIsCreatingOrEditing;

    $scope.bookmarks = bookmarksCtrl.bookmarks;
  });
