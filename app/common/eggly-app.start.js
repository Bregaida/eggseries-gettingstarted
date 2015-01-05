angular.module('Eggly', [
  'ui.router',
  'categories',
  'categories.bookmarks'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('eggly', {
      url: '',
      abstract: true
    });
    $urlRouterProvider.otherwise('/');
  })
  .controller('MainController', function($scope /*, $state*/){

      //---------------------------------------------------------
      // CRUD
      //---------------------------------------------------------
      function resetCreateForm() {
        $scope.newBookmark = {
          title: '',
          url: '',
          category: $scope.currentCategory
        };

      }

      function createBookmark(bookmark) {
        bookmark.id = $scope.bookmarks.length;
        bookmark.category = $scope.currentCategory.name;
        $scope.bookmarks.push(bookmark);

        resetCreateForm();
        cancelCreating();
      }

      $scope.createBookmark = createBookmark;

      $scope.editedBookmark = null;

      function isEditingBookmark(bookmarkId) {
        return $scope.editedBookmark && $scope.editedBookmark.id === bookmarkId;
      }

      $scope.isEditingBookmark = isEditingBookmark;

      function deleteBookmark(bookmark) {
        _.remove($scope.bookmarks, function (b) {
          return b.id === bookmark.id;
        });
      }

      $scope.deleteBookmark = deleteBookmark;

      //---------------------------------------------------------
      // CREATING AND EDITING STATES
      //---------------------------------------------------------

      $scope.currentCategory = null;
      $scope.isCreating = false;
      $scope.isEditing = false;

      function shouldShowCreating() {
        return $scope.currentCategory && !$scope.isEditing;
      }

      function shouldShowEditing() {
        return $scope.currentCategory && $scope.isEditing;
      }

      function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;

        resetCreateForm();
      }

      function startEditing() {
        $scope.isEditing = true;
        $scope.isCreating = false;
      }

      function cancelCreating() {
        $scope.isCreating = false;
      }

      function setCurrentCategory(category) {
        $scope.currentCategory = category;

        cancelCreating();
        cancelEditing();
      }

      $scope.setCurrentCategory = setCurrentCategory;
      $scope.shouldShowCreating = shouldShowCreating;
      $scope.shouldShowEditing = shouldShowEditing;
      $scope.startCreating = startCreating;
      $scope.startEditing = startEditing;
      $scope.cancelCreating = cancelCreating;

    });
