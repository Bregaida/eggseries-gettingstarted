angular.module('Eggly', [

])
.controller('MainController', function($scope){
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
