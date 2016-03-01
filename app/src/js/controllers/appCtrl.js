'use strict';

var app = angular.module('App.Controller.App', []);

app.controller('AppCtrl', AppCtrl);

function AppCtrl ($scope, igData) {
  var vm = this;

  $scope.userPosts = [];

  igData.getUserData('6').then(function(data) {
    $scope.userPosts = data;
    console.log($scope);
  });

};

module.exports = AppCtrl;
