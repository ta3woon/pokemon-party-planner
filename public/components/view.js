angular.module('view-party')
.controller('ViewCtrl', function() {
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
    templateUrl: 'public/templates/view-party.html'
      };
});
