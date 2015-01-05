/**
 * Created by enrique1 on 1/2/15.
 */
angular.module('categories.bookmarks.edit', [
  'categories.bookmarks'
])
  .controller('BookmarksEditController', function ($scope, $stateParams, $state) {
    var bookmarksEditCtrl = this;
    bookmarksEditCtrl.editedBookmark = angular.copy( _($scope.bookmarks).find({id : parseInt($stateParams.bookmark)}) );

    function cancelEditing() {
      $state.go('eggly.categories.bookmarks', { category: bookmarksEditCtrl.editedBookmark.category });
    }

    function updateBookmark(bookmark) {
      var index = _.findIndex($scope.bookmarks, function(b) {
        return b.id == bookmark.id;
      });
      $scope.bookmarks[index] = bookmark;

      $state.go('eggly.categories.bookmarks', { category: bookmarksEditCtrl.editedBookmark.category });

      bookmarksEditCtrl.editedBookmark = null;
    }

    bookmarksEditCtrl.updateBookmark = updateBookmark;
    bookmarksEditCtrl.cancelEditing = cancelEditing;
  });
