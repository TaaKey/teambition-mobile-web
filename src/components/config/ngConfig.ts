'use strict';
export default angular.module('teambition').config(
  // @ngInject
  (
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider,
    $locationProvider: angular.ILocationProvider,
    $ionicConfigProvider: ionic.utility.IonicConfigProvider,
    $compileProvider: angular.ICompileProvider,
    $httpProvider: angular.IHttpProvider
  ) => {

    $httpProvider.defaults.withCredentials = true;

    $ionicConfigProvider.views.forwardCache(false);

    $ionicConfigProvider.views.transition('none');

    $ionicConfigProvider.views.maxCache(0);

    $ionicConfigProvider.tabs.position('bottom');

    $ionicConfigProvider.tabs.style('standard');

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|wxlocalresource):|data:image\//);
  }
);