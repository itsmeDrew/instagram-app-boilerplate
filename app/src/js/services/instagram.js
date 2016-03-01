'use strict';

var app = angular.module('App.Service.Instagram', []);

app.service('instagram', igCtrl);

function igCtrl ($http, $q) {
  var vm = this;
  var clientId = 'c01c2b540bd64074b836f876f81ef46e';
  var userId = '479275138';

  vm.getUserData = getUserData;

  function getUserData(postCount) {
    return $http.jsonp('https://api.instagram.com/v1/users/' + userId + '/media/recent/?client_id=' + clientId + '&callback=JSON_CALLBACK&count=' + postCount)
      .then(function(response) {
        var _responseData = response.data;
        var _userData = _responseData.data;

        if (_userData) {
          return _userData;
        } else {
          return $q.reject(_responseData)
        }

      }, function(response) {
        return $q.reject(_responseData);
      });
  }

};

module.exports = igCtrl;
