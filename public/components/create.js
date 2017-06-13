angular.module('create-party')
.controller('CreateCtrl', function() {
})
.directive('search', function() {
  return {
    scope: {
      service: '<',
      result: '<'
    },
    restrict: 'E',
    controller: 'CreateCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'public/templates/create-party.html'
      };
});