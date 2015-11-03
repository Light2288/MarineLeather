
/* JavaScript content from controllers/ContactsCtrl.js in folder common */
/**
 * 
 */

appMarineLeather.controller('ContactsCtrl', function($scope,$ionicHistory){
	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.backButton.show = false;
		$scope.backButton.func = function() {};
    });
	
//	$scope.$on('$ionicView.beforeEnter', function() {
//		$scope.avantiButton.hide=true;
//		});
});