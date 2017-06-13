
angular.module('App')

.controller('AppCtrl', function() {
})

.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'public/templates/app.html'
      };
});
