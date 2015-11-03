/**
 * 
 */

appMarineLeather.controller('ProdottiCtrl', ['$scope', '$location', function($scope,$location){
	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.backButton.show = false;
		$scope.backButton.func = function() {};
    });
	
	$scope.productTypes = [
	                {title:'Special',
	                	text:'La collezione più all\'avanguardia',
	                	image:'prodotti_special',
	                	page: '\"prodotti-special\"',
	                	style: "border-top-color: white;"
	                		},
	                {title:'Classic',
	                		text:'La classicità e l\'eleganza senza tempo della pelle',
	                		image:'prodotti_classic',
	                		page: '\"prodotti-classic\"'},
            		{title:'Prestige Serigrafati',
                		text:'Dedicata alle soluzioni d\'arredo più creative',
                		image:'prodotti_serigrafati',
                		page: '\"prodotti-serigrafati\"'},
            		{title:'Prestige Stampati',
                		text:'La perfetta combinazione tra raffinatezza e lavorazione a mano al 100%',
                		image:'prodotti_stampati',
                		page: '\"prodotti-stampati\"'},
            		{title:'Space',
                		text:'Un armonico intreccio di materiali diversi per un effetto unico',
                		image:'prodotti_space',
                		page: '\"prodotti-space\"'},
            		{title:'Nettuno',
                		text:'La scelta ideale per pavimenti, rivestimenti e scale',
                		image:'prodotti_nettuno',
                		page: '\"prodotti-nettuno\"'}
	            ];
	
	$scope.goToProduct = function(page){
		$location.path("/"+page);
	}
}]);