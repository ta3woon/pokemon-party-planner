angular.module('viewParty')
// .controller('viewCtrl', function() {
// })
.directive('viewParty', function() {
  return {
    scope: {
    },
    controller: 'viewCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/public/templates/view-party.html'
      };
});
