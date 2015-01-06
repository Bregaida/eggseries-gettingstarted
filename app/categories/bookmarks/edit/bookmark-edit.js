/**
 * Created by enrique1 on 1/2/15.
 */
angular.module('categories.bookmarks.edit', [
  'categories.bookmarks'
])
  .controller('BookmarksEditController', function ($scope, $stateParams, $state) {
    var bookmarksEditCtrl = this;
    bookmarksEditCtrl.editedBookmark = angular.copy( _($scope.bookmarks).find({id : parseInt($stateParams.bookmark)}) );

    function resetEditing() {
      var categoryName = bookmarksEditCtrl.editedBookmark.category;
      bookmarksEditCtrl.editedBookmark = null;
      $state.go('eggly.categories.bookmarks', { category: categoryName });
    }

    function updateBookmark(bookmark) {
      var index = _.findIndex($scope.bookmarks, function(b) {
        return b.id == bookmark.id;
      });
      $scope.bookmarks[index] = bookmark;

      resetEditing();
    }

    bookmarksEditCtrl.updateBookmark = updateBookmark;
    bookmarksEditCtrl.cancelEditing = resetEditing;
  });
