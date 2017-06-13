angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state({
      name: 'home',
      url: '/home',
      templateUrl: 'templates/app.html',// points to onew od hte html files in our folder
      controller: function($scope, $http) {
        $scope.pokemonNames = [];
        $scope.selectedPokemon = {};
        $scope.typeNames = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'].sort();
        $scope.findType = function(type) {
          
        $http({
          method: 'GET',
          url: 'https://pokeapi.co/api/v2/type/'+type,
        }).then(function successCallback(response) {
          // console.log(response.data.pokemon)
          $scope.pokemonNames = response.data.pokemon.map(function(pokemon) {
            return pokemon.pokemon.name;
          })
          console.log($scope.pokemon);
        }, function errorCallback(response){
          console.error(response);
        })   

        }

        $scope.pokemonInfo = function(pokemon) {
        
        $http({
          method: 'GET',
          url: 'http://pokeapi.co/api/v2/pokemon/'+pokemon
        }).then(function successCallback(response){
          let currentPokemon = response.data;
          $scope.selectedPokemon = {
            name: currentPokemon.name,
            id: currentPokemon.id,
            // height: currentPokemon.height,
            // weight: currentPokemon.weight,
            image: currentPokemon.sprites.front_default
          };
          console.log($scope.selectedPokemon)
        }), function errorCallback(response){
          console.error(response);
        }


        }  
      }
    })
    // .state({
    //   name: 'create',
    //   url: '/view',
    //   templateUrl: 'templates/create-party.html',// points to onew od hte html files in our folder
    //   controller: ''
    // })
    // .state({
    //   name: 'view',
    //   url: '/view',
    //   templateUrl: 'templates/party-list.html',// points to onew od hte html files in our folder
    //   controller: ''
    // })
    // .state({
    //   name: '404',
    //   url: '/404',
    //   template: '<p>not found</p>',
    //   controller: ''
    // })
});






// .controller('AppCtrl', function() {
// })

// .directive('app', function() {
//   return {
//     scope: {
//     },
//     // restrict: 'E',
//     controller: 'AppCtrl',
//     controllerAs: 'ctrl',
//     bindToController: true,
//     templateUrl: 'templates/app.html'
//       };
// });
