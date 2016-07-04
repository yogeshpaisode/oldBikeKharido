angular.module('starter.controllers', [])
.controller("loginCtr", ["$scope", "$state", "$ionicViewService", function ($scope, $state, $ionicViewService) {
    var home = "app.dashboard";
    $scope.doLogIn = function () {
        $ionicViewService.nextViewOptions({disableBack: true});
        $state.go(home, {}, { location: 'replace' });
    }
}]);