angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Link', function($scope, Link) {

    $scope.placeholder = 'Flattn your URL!';   

    $scope.createURL = function(){
    	if ($scope.url){
	    	Link.create($scope.url).success(function(data) {
	    		$scope.url = data.id;
	    		Materialize.toast("Done!", 2000, 'toast');
	    	}).error(function (){
	    		Materialize.toast("Failed", 2000, 'toast');
	    	});
    	}else{
    		Materialize.toast("Failed", 2000, 'toast');
    	}
    };

}]);