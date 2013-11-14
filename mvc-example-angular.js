var icecreamApp = angular.module('icecreamApp', []);

icecreamApp.controller('mainCtrl', ['$scope', function ($scope) {
  $scope.icecreamList = [
      {id: 't1', name:'バニラ'},
      {id: 't2', name:'チョコレートチップ'},
      {id: 't3', name:'オレンジシャーベット'},
      {id: 't4', name:'チョコミント'},
      {id: 't5', name:'ストロベリー'},
      {id: 't6', name:'抹茶'}
  ];
  $scope.onclickIcecream = function (this) {
    console.log(this);
  }
  //
}]);
