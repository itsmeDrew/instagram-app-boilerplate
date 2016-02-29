'use strict';

var app = angular.module('App.Controller.App', []);

app.controller('AppCtrl', AppCtrl);

function AppCtrl ($scope, igData) {
  var vm = this;
  $scope.approvedTag = 'fish';
  $scope.userPosts = [];

  igData.getUserData().then(function(data) {
    $scope.userPosts = data;
  });

};

module.exports = AppCtrl;
