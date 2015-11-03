/**
 * 
 */

//var appMarineLeather = angular.module("appMarineLeather",['ionic','ngTouch','ngIOS9UIWebViewPatch','smoothScroll']);

var appMarineLeather = angular.module("appMarineLeather",['ionic','ngTouch','ngIOS9UIWebViewPatch','duScroll']);

//appMarineLeather.run(['$anchorScroll', function($anchorScroll) {
//    $anchorScroll.yOffset = 500;   // always scroll by 50 extra pixels
//}])

appMarineLeather.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //no navegation animation transitions
//	$ionicConfigProvider.view.transition('none');
//	$scope.goBack() = function() {
//		$ionicHistory.goBack();
//	};

	$stateProvider.state('chisiamo', {
		url: "/chisiamo",
		templateUrl: 'views/chisiamo.html',
		controller: "ChiSiamoCtrl"
	});

	$stateProvider.state('contacts', {
		url: "/contacts",
		templateUrl: 'views/contacts.html',
		controller: "ContactsCtrl"
	});

	$stateProvider.state('prodotti', {
		url: "/prodotti",
		templateUrl: 'views/prodotti.html',
		controller: "ProdottiCtrl"
	});

	$stateProvider.state('prodotti-special', {
		url: "/prodotti-special",
		templateUrl: 'views/prodotti-special.html',
		controller: "ProdottiSpecialCtrl"
	});
	$stateProvider.state('myleather', {
		url: "/myleather",
		templateUrl: 'views/myleather.html',
		controller: "MyLeatherCtrl"
	});
	$stateProvider.state('gallery', {
		url: "/gallery",
		templateUrl: 'views/gallery.html',
		controller: "GalleryCtrl"
	});


	$urlRouterProvider.otherwise('/chisiamo');
});


appMarineLeather.controller('MainCtrl', function($scope){
	$scope.tabChiSiamoIcon = "images/bottom-menu-icons/icon_chiSiamo_active.png";
	$scope.tabProdottiIcon = "images/bottom-menu-icons/icon_prodotti.png";
	$scope.tabMyLeatherIcon = "images/bottom-menu-icons/icon_myLeather.png";
	$scope.tabGalleryIcon = "images/bottom-menu-icons/icon_gallery.png";
	$scope.tabContactsIcon = "images/bottom-menu-icons/icon_contatti.png";
	$scope.chiSiamoTabStyle = {color:'rgb(124,53,23)'}
	
	
	$scope.activeChiSiamoTab = function() {
		
		$scope.chiSiamoTabStyle = {color:'rgb(124,53,23)'}
		$scope.prodottiTabStyle = {};
		$scope.myLeatherTabStyle = {};
		$scope.galleryTabStyle = {};
		$scope.contactsTabStyle = {};
		
		$scope.tabChiSiamoIcon = "images/bottom-menu-icons/icon_chiSiamo_active.png";
		$scope.tabProdottiIcon = "images/bottom-menu-icons/icon_prodotti.png";
		$scope.tabMyLeatherIcon = "images/bottom-menu-icons/icon_myLeather.png";
		$scope.tabGalleryIcon = "images/bottom-menu-icons/icon_gallery.png";
		$scope.tabContactsIcon = "images/bottom-menu-icons/icon_contatti.png";
	}
	
	$scope.activeProdottiTab = function() {
		$scope.chiSiamoTabStyle = {}
		$scope.prodottiTabStyle = {color:'rgb(124,53,23)'};
		$scope.myLeatherTabStyle = {};
		$scope.galleryTabStyle = {};
		$scope.contactsTabStyle = {};
		
		$scope.tabChiSiamoIcon = "images/bottom-menu-icons/icon_chiSiamo.png";
		$scope.tabProdottiIcon = "images/bottom-menu-icons/icon_prodotti_active.png";
		$scope.tabMyLeatherIcon = "images/bottom-menu-icons/icon_myLeather.png";
		$scope.tabGalleryIcon = "images/bottom-menu-icons/icon_gallery.png";
		$scope.tabContactsIcon = "images/bottom-menu-icons/icon_contatti.png";
	}
	
	$scope.activeMyLeatherTab = function() {
		$scope.chiSiamoTabStyle = {}
		$scope.prodottiTabStyle = {};
		$scope.myLeatherTabStyle = {color:'rgb(124,53,23)'};
		$scope.galleryTabStyle = {};
		$scope.contactsTabStyle = {};
		
		$scope.tabChiSiamoIcon = "images/bottom-menu-icons/icon_chiSiamo.png";
		$scope.tabProdottiIcon = "images/bottom-menu-icons/icon_prodotti.png";
		$scope.tabMyLeatherIcon = "images/bottom-menu-icons/icon_myLeather_active.png";
		$scope.tabGalleryIcon = "images/bottom-menu-icons/icon_gallery.png";
		$scope.tabContactsIcon = "images/bottom-menu-icons/icon_contatti.png";
	}
	
	$scope.activeGalleryTab = function() {
		$scope.chiSiamoTabStyle = {}
		$scope.prodottiTabStyle = {};
		$scope.myLeatherTabStyle = {};
		$scope.galleryTabStyle = {color:'rgb(124,53,23)'};
		$scope.contactsTabStyle = {};
		
		$scope.tabChiSiamoIcon = "images/bottom-menu-icons/icon_chiSiamo.png";
		$scope.tabProdottiIcon = "images/bottom-menu-icons/icon_prodotti.png";
		$scope.tabMyLeatherIcon = "images/bottom-menu-icons/icon_myLeather.png";
		$scope.tabGalleryIcon = "images/bottom-menu-icons/icon_gallery_active.png";
		$scope.tabContactsIcon = "images/bottom-menu-icons/icon_contatti.png";
	}
	
	$scope.activeContactsTab = function() {
		$scope.chiSiamoTabStyle = {}
		$scope.prodottiTabStyle = {};
		$scope.myLeatherTabStyle = {};
		$scope.galleryTabStyle = {};
		$scope.contactsTabStyle = {color:'rgb(124,53,23)'};
		
		$scope.tabChiSiamoIcon = "images/bottom-menu-icons/icon_chiSiamo.png";
		$scope.tabProdottiIcon = "images/bottom-menu-icons/icon_prodotti.png";
		$scope.tabMyLeatherIcon = "images/bottom-menu-icons/icon_myLeather.png";
		$scope.tabGalleryIcon = "images/bottom-menu-icons/icon_gallery.png";
		$scope.tabContactsIcon = "images/bottom-menu-icons/icon_contatti_active.png";
	}
	
	$scope.backButton = {
			show: false,
			func: function() {}
	};
	
});