/**
 * 
 */

appMarineLeather.controller('GalleryCtrl', function($scope, $ionicModal){
	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.backButton.show = false;
		$scope.backButton.func = function() {};
    });
	var isOpen = false;
	
	$scope.galleryImages = ["image1",
	                        "image2",
	                        "image3",
	                        "image4",
	                        "image5",
	                        "image6",
	                        "image7",
	                        "image8",
	                        "image9",
	                        "image10"
	                        ]
	$scope.showImage = function(index) {
		if(!isOpen){
			$scope.activeSlide = index;
			$scope.showModal('templates/image-popover.html');
			isOpen = true;
		}
	}

	$scope.showModal = function(templateUrl) {
		$ionicModal.fromTemplateUrl(templateUrl, {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
			var cssString = "filter: blur(2px);-webkit-filter: blur(2px);-moz-filter: blur(2px); -o-filter: blur(2px);-ms-filter: blur(2px);";
			document.getElementById("gallery-pane").style.cssText += cssString;
		});
	}

	// Close the modal
	$scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove();
		isOpen = false;
		var cssText = document.getElementById("gallery-pane").style.cssText;
		var cssStrings = ["filter: blur(2px);",
		             "-webkit-filter: blur(2px);",
		             "-moz-filter: blur(2px);",
		             "-o-filter: blur(2px);",
		             "-ms-filter: blur(2px);"];
		for (i = 0; i < cssStrings.length; i++)
			document.getElementById("gallery-pane").style.cssText = 
				document.getElementById("gallery-pane").style.cssText.replace(cssStrings[i],"");
	};
});