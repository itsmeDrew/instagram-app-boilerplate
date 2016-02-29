'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  // $locationProvider.html5Mode(true);

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'header': {
          templateUrl: 'partials/_header.html'
        },
        'nav@app': {
          templateUrl: 'partials/_nav.html',
          controller: 'NavCtrl'
        },
        'content': {
          templateUrl: 'templates/home.tpl.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        },
        'footer': {
          templateUrl: 'partials/_footer.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
