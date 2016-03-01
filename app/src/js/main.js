'use strict';

require('angular');
require('./templates');

require('./services/instagram');

var app = angular.module('App', [
  'templates',
  'App.Service.Instagram'
]);

app.controller('AppCtrl', require('./controllers/AppCtrl'));

app.constant('App.Config', window.config);
