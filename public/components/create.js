angular.module('createParty')
// .controller('createCtrl', function() {
// })
.directive('createParty', function() {
  return {
    scope: {
    },
    controller: 'CreateController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/public/templates/create-party.html'
      };
});