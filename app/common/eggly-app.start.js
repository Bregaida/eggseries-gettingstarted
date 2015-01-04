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
    $scope.categories = [
      {"id": 0, "name": "Development"},
      {"id": 1, "name": "Design"},
      {"id": 2, "name": "Exercise"},
      {"id": 3, "name": "Humor"}
    ];

      $scope.bookmarks = [
        {"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id":1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development" },
        {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
      ];


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

      function setEditedBookmark(bookmark) {
        $scope.editedBookmark = angular.copy(bookmark);
      }

      function updateBookmark(bookmark) {
        var index = _.findIndex($scope.bookmarks, function(b) {
          return b.id == bookmark.id;
        });
        $scope.bookmarks[index] = bookmark;

        $scope.editedBookmark = null;
        $scope.isEditing = false;
      }

      function isEditingBookmark(bookmarkId) {
        return $scope.editedBookmark && $scope.editedBookmark.id === bookmarkId;
      }

      $scope.setEditedBookmark = setEditedBookmark;
      $scope.updateBookmark = updateBookmark;
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

      function cancelEditing() {
        $scope.isEditing = false;
      }

      function setCurrentCategory(category) {
        $scope.currentCategory = category;

//        $state.go('eggly.categories.bookmarks', {category:category.name});

        cancelCreating();
        cancelEditing();
      }

      function isCurrentCategory(category) {
        return $scope.currentCategory && $scope.currentCategory.name === category.name;
      }

      $scope.setCurrentCategory = setCurrentCategory;
      $scope.isCurrentCategory = isCurrentCategory;
      $scope.shouldShowCreating = shouldShowCreating;
      $scope.shouldShowEditing = shouldShowEditing;
      $scope.startCreating = startCreating;
      $scope.startEditing = startEditing;
      $scope.cancelCreating = cancelCreating;
      $scope.cancelEditing = cancelEditing;

    });
