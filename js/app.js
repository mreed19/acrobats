angular.module('acrobatApp', [])
.controller('AcrobatController', function($scope) {
  $scope.editing = false;
  $scope.acrobats = [];
  $scope.acrobat = {};
  $scope.addAcrobat = function() {
    $scope.acrobats.push($scope.acrobat);
    $scope.acrobat = {};
    $scope.acrobat.name = '';
    $scope.acrobat.act = '';
  }
  $scope.editAcrobat = function(acrobat) {
    $scope.editing = true;
    $scope.acrobat = acrobat;
  }
  $scope.updateAcrobat = function() {
    $scope.acrobat = {};
    $scope.editing = false;
  }
  $scope.removeAcrobat = function(index) {
    $scope.acrobats.splice(index, 1);
  }
});
