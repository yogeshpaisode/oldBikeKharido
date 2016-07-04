angular.module('starter', ['ionic', 'starter.controllers','ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/app.html'
      })
    .state('app.dashboard', {
        url: '/dashboard',
        views: {
            'appContent': {
                templateUrl: 'templates/dashboard.html'
            }
        }
    })
    .state('logIn', {
        url: '/logIn',
        templateUrl: 'templates/logIn.html',
        controller: "loginCtr"
    });

    $urlRouterProvider.otherwise('/logIn');
});
