describe('icecreamApp', function () {

  describe('mainCtrl', function () {
    var $scope, ctrl;

    beforeEach(module('icecreamApp'));

    beforeEach(inject(function ($controller) {
      $scope = {};
      ctrl = $controller('mainCtrl', {"$scope": $scope});
    }));
    
    it('アイスクリームのリスト', function () {
      expect( $scope.icecreamModel.listAll.length).toEqual(6);
      expect( $scope.icecreamModel.list ).toEqual([]);
    });

    it('選択可能なアイスクリームの個数', function(){
      expect( $scope.icecreamModel.numbers.length ).toEqual(5);
      expect( $scope.icecreamModel.number.amount ).toEqual(2);
    });

    it('アイスクリームの追加', function () {
      $scope.icecreamModel.add( $scope.icecreamModel.listAll[0] );
      expect( $scope.icecreamModel.list.length ).toEqual(1);

      $scope.icecreamModel.add( $scope.icecreamModel.listAll[5] );
      expect( $scope.icecreamModel.list.length ).toEqual(2);

      $scope.icecreamModel.add( $scope.icecreamModel.listAll[3] );
      expect( $scope.icecreamModel.list.length ).toEqual(2);
    });

    it('選択リストにアイスクリームがあればtrue', function () {
      var item5 = $scope.icecreamModel.listAll[5];
      var item1 = $scope.icecreamModel.listAll[1]; 

      $scope.icecreamModel.add(item5);
      expect( $scope.icecreamModel.contain(item5) ).toEqual(true); 
      expect( $scope.icecreamModel.contain(item1) ).toEqual(false); 
    });

    it('クリア', function () {
      $scope.icecreamModel.add( $scope.icecreamModel.listAll[0] );
      $scope.icecreamModel.add( $scope.icecreamModel.listAll[4] );

      $scope.icecreamModel.clear();
      expect( $scope.icecreamModel.list.length ).toEqual(0);
    });
  });

});
