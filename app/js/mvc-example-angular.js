var icecreamApp = angular.module('icecreamApp', []);

icecreamApp.controller('mainCtrl', ['$scope', function ($scope) {
  
  $scope.icecreamModel = {
    // 選択できるアイスクリーム一覧
    listAll: [
      {id: 't1', name:'バニラ'},
      {id: 't2', name:'チョコレートチップ'},
      {id: 't3', name:'オレンジシャーベット'},
      {id: 't4', name:'チョコミント'},
      {id: 't5', name:'ストロベリー'},
      {id: 't6', name:'抹茶'}
    ],
    // 選択されているアイスクリーム
    list: [], 
    // 選択可能なアイスクリームの個数一覧
    numbers: [
      { amount: 1, name: '１個' },
      { amount: 2, name: '２個' },
      { amount: 3, name: '３個' },
      { amount: 4, name: '４個' },
      { amount: 5, name: '５個' }
    ],
    // 選択可能なアイスクリームの個数
    number: "",
    // アイスクリームを選択リストに追加
    add: function (item) {
      var list = this.list;
      list.push(item);
      if( list.length > this.number.amount ){
        list.shift();
      }
      this.selectionView();
    },
    // 選択リストにアイスクリームがあればtrue 
    contain: function (icecream) {
      return this.list.indexOf(icecream) >=0;
    },
    // クリア
    clear: function () {
      this.list = [];
      this.updateView();
    },
    updateView: function () {
      this.outputView();
      this.selectionView();
    },
    outputView: function () {
      var names = []; 
      var list = this.list;
      angular.forEach(list, function (val) {
        names.push(val.name);
      });
      return names.join(" > "); 
    },
    selectionView: function(){
      var listAll = this.listAll;
      
      angular.forEach(listAll, function (item) {
        item.selected = $scope.icecreamModel.contain(item);
      });
    }
  };

  // 選択可能なアイスクリーム個数の初期化
  $scope.icecreamModel.number = $scope.icecreamModel.numbers[1];
}]);
