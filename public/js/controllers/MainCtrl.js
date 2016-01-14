angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Link', function($scope, Link) {

    $scope.placeholder = 'Flattn your URL!';
    $scope.loading = false;   

    $scope.createURL = function(){
        $scope.loading = true;

    	if ($scope.url){
	    	Link.create($scope.url).success(function(data) {
	    		$scope.url = data.id;
	    		Materialize.toast("Done!", 2000, 'toast');
                $scope.loading = false;
	    	}).error(function (){
	    		Materialize.toast("Failed", 2000, 'toast');
                $scope.loading = false;
	    	});
    	}else{
    		Materialize.toast("Failed", 2000, 'toast');
            $scope.loading = false;
    	}
    };

}]);