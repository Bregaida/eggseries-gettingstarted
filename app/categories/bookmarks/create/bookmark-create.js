/**
 * Created by enrique1 on 1/2/15.
 */
angular.module('categories.bookmarks.create', [
  'categories.bookmarks'
])
  .controller('BookmarksCreateController', function ($scope, $stateParams, $state) {
    var bookmarksCreateCtrl = this;
    bookmarksCreateCtrl.newBookmark = null;

    function createBookmark(bookmark) {
      bookmark.id = $scope.bookmarks.length;
      bookmark.category = $stateParams.category;
      $scope.bookmarks.push(bookmark);

      resetCreating();
    }

    function resetCreating() {
      $state.go('eggly.categories.bookmarks', { category: $stateParams.category });
    }

    bookmarksCreateCtrl.createBookmark = createBookmark;
    bookmarksCreateCtrl.resetCreating = resetCreating;
  });
