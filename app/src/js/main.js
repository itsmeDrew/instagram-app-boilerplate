'use strict';

var $ = require('jquery-browserify');

require('angular');
require('angularfire');
require('angular-ui-router');
require('./templates');

require('./services/ig');

var app = angular.module('App', [
  'ui.router',
  'templates',
  'App.Service.Instagram'
]);

app.controller('AppCtrl', require('./controllers/AppCtrl'));

app.constant('App.Config', window.config);

app.config(require('./on_config'));
