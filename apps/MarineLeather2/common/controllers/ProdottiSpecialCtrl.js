/**
 * 
 */

appMarineLeather.controller('ProdottiSpecialCtrl', function($scope,$location,$anchorScroll,$ionicModal,$ionicHistory){
	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.backButton.show = true;
		$scope.backButton.func = function() {
			
			$ionicHistory.goBack();
			$scope.backButton.show = false;
		};
    });
	
	
//	$scope.goToProdotti = function() {
//		 $location.path("/prodotti"); // path not hash
//	}
	
	var isOpen = false;
	var isClickOnButton = false;
	
	var products = [
	                {categoryName: 'Apollo', productsArray: [{productName: 'Naturale', nameForImage: 'apollo/naturale'},
	                                                         {productName: 'Cognac', nameForImage: 'apollo/cognac'},
	                                                         {productName: 'Saddle', nameForImage: 'apollo/saddle'},
	                                                         {productName: 'Acero', nameForImage: 'apollo/acero'},
	                                                         {productName: 'Moka', nameForImage: 'apollo/moka'},
	                                                         {productName: 'Dark Brown', nameForImage: 'apollo/darkbrown'},
	                                                         {productName: 'T.Moro', nameForImage: 'apollo/tmoro'},
	                                                         {productName: 'Bosco', nameForImage: 'apollo/bosco'}
	                                                         ]
	                },
	                {categoryName: 'Apollo Wash', productsArray: [{productName: 'Mist', nameForImage: 'apollowash/mist'},
	                                                              {productName: 'Caffè', nameForImage: 'apollowash/caffe'},
	                                                              {productName: 'Cognac', nameForImage: 'apollowash/cognac'},
	                                                              {productName: 'T.Moro', nameForImage: 'apollowash/tmoro'},
	                                                              {productName: 'Red', nameForImage: 'apollowash/red'}
	                                                              ]
	                },
	                {categoryName: 'Apollo AAA', productsArray: [{productName: 'Mist', nameForImage: 'apolloaaa/mist'},
	                                                              {productName: 'Caffè', nameForImage: 'apolloaaa/caffe'},
	                                                              {productName: 'Cognac', nameForImage: 'apolloaaa/cognac'},
	                                                              {productName: 'T.Moro', nameForImage: 'apolloaaa/tmoro'},
	                                                              {productName: 'Red', nameForImage: 'apolloaaa/red'}
	                                                              ]
	                },
	                {categoryName: 'Apollo BBB', productsArray: [{productName: 'Mist', nameForImage: 'apollobbb/mist'},
	                                                              {productName: 'Caffè', nameForImage: 'apollobbb/caffe'},
	                                                              {productName: 'Cognac', nameForImage: 'apollobbb/cognac'},
	                                                              {productName: 'T.Moro', nameForImage: 'apollobbb/tmoro'},
	                                                              {productName: 'Red', nameForImage: 'apollobbb/red'}
	                                                              ]
	                }
	                ];

	$scope.products = products;
	
	var detailProductImages = [];
	for (var i = 0; i < products.length; i ++){
		for (var j = 0; j < products[i].productsArray.length; j++){
			var productDetail = {};
			productDetail.categoryName = products[i].categoryName;
			productDetail.productName = products[i].productsArray[j].productName;
			productDetail.productDetailImage = products[i].productsArray[j].nameForImage + "_detail";
			detailProductImages.push(productDetail);
		}
	}
	
	
	$scope.detailProductImages = detailProductImages;
	
	
	$scope.showProductDetail = function(index,length) {
		var count = 0;
		for (var j = 0; j < length; j++)
			count += $scope.products[j].productsArray.length;
		index += count;
		console.log("index " + index);
		if(!isOpen){
			$scope.activeSlide = index;
			$scope.showModal('templates/product-detail-popover.html');
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
			setTimeout(function() { 
				var cssString = "filter: blur(2px);-webkit-filter: blur(2px);-moz-filter: blur(2px); -o-filter: blur(2px);-ms-filter: blur(2px);";
				document.getElementById("myleather-special-pane").style.cssText += cssString;
			}, 500);

		});
	}

	// Close the modal
	$scope.closeModal = function() {
		if(!isClickOnButton) {
			$scope.modal.hide();
			$scope.modal.remove();
			isOpen = false;
			var cssText = document.getElementById("myleather-special-pane").style.cssText;
			var cssStrings = ["filter: blur(2px);",
			                  "-webkit-filter: blur(2px);",
			                  "-moz-filter: blur(2px);",
			                  "-o-filter: blur(2px);",
			                  "-ms-filter: blur(2px);"];
			for (i = 0; i < cssStrings.length; i++)
				document.getElementById("myleather-special-pane").style.cssText = 
					document.getElementById("myleather-special-pane").style.cssText.replace(cssStrings[i],"");
		}
		else
			isClickOnButton = false;
	};

	$scope.changeBackground = function() {
		isClickOnButton = true;
		if (document.getElementById("myleather-modal").style.background.indexOf("255") > -1)
			document.getElementById("myleather-modal").style.background = "rgba(0,0,0,0.80)";
		else
			document.getElementById("myleather-modal").style.background = "rgba(255,255,255,0.80)";
	}
});