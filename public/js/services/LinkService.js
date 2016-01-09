angular.module('LinkService', []).factory('Link', ['$http', function($http){
	return {
		create : function(linkData){
			return $http({
    			method: 'POST',
    			url: '/api/create',
    			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    			data: 'url='+encodeURIComponent(linkData)
			});
		}
	}
}]);