
/* JavaScript content from controllers/MyLeatherCtrl.js in folder common */
/**
 * 
 */

appMarineLeather.controller('MyLeatherCtrl', function($scope,$location,$anchorScroll,$ionicScrollDelegate){
	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.backButton.show = false;
		$scope.backButton.func = function() {};
    });

	var pictureSource=navigator.camera.PictureSourceType;
	var destinationType=navigator.camera.DestinationType;

	var clearImage;

	$scope.hideCanvas = true;
	$scope.hideInitialText = false;

	$scope.colorCircleEnabled = [false,
	                             false,
	                             false
	                             ];
	var colorCircleSelected = "colorCircle-1";
	document.getElementById(colorCircleSelected).style.border = "3pt solid rgb(124,53,23)";
	
//	$scope.hideCanvas = false;
//	$scope.hideInitialText = true;
//
//	var canvas = document.getElementById('myCanvas');
//	var context = canvas.getContext('2d');
//	context.clearRect(0, 0, canvas.width, canvas.height);
//	var imageObj = new Image();
//
//	imageObj.src = "images/3c07345.png";
//
//	clearImage = imageObj;
//
//	imageObj.onload = function() {
//		var imageWidth = imageObj.width;
//		var prop = 300/imageWidth;
//		var drawnImageHeight = imageObj.height * prop;
//		canvas.height = drawnImageHeight;
//
//		context.drawImage(imageObj, 0, 0, 300, drawnImageHeight);
//		
//		alert(document.getElementById("circles-row-myleather").style.paddingLeft);
//		document.getElementById("circles-row-myleather").style.paddingLeft = canvas.style.marginLeft;
//		alert(document.getElementById("circles-row-myleather").style.paddingLeft);
//	}; 

	// Called when a photo is successfully retrieved
	function onPhotoDataSuccess(imageData) {
		console.log("Entro in onPhotoDataSuccess");
		colorCircleSelected = "colorCircle-1";

		$scope.$apply(function (){

			$scope.hideCanvas = false;
			$scope.hideInitialText = true;

			var canvas = document.getElementById('myCanvas');
			var context = canvas.getContext('2d');
			context.clearRect(0, 0, canvas.width, canvas.height);
			var imageObj = new Image();

			imageObj.src = "data:image/jpeg;base64," + imageData;

			clearImage = imageObj;

			imageObj.onload = function() {
				var imageWidth = imageObj.width;
				var prop = 300/imageWidth;
				var drawnImageHeight = imageObj.height * prop;
				canvas.height = drawnImageHeight;

				context.drawImage(imageObj, 0, 0, 300, drawnImageHeight);
				
				setTimeout(
						function(){ 
							var scrollToY = document.getElementById('buttons-myleather-camera').offsetHeight + 10;
							
							$ionicScrollDelegate.$getByHandle('myLeatherScrollDelegate').
							scrollTo(0, scrollToY, true);
						}, 
						100);
			}; 
		});
	}

	// Called when a photo is successfully retrieved

	function onPhotoURISuccess(imageURI) {
		console.log("Entro in onPhotoDataSuccess");
		colorCircleSelected = "colorCircle-1";

		$scope.$apply(function (){

			$scope.hideCanvas = false;
			$scope.hideInitialText = true;

			var canvas = document.getElementById('myCanvas');
			var context = canvas.getContext('2d');
			context.clearRect(0, 0, canvas.width, canvas.height);
			var imageObj = new Image();

			imageObj.src = imageURI;

			clearImage = imageObj;

			imageObj.onload = function() {
				var imageWidth = imageObj.width;
				var prop = 300/imageWidth;
				var drawnImageHeight = imageObj.height * prop;
				canvas.height = drawnImageHeight;

				context.drawImage(imageObj, 0, 0, 300, drawnImageHeight);

				setTimeout(
						function(){ 
							var scrollToY = document.getElementById('buttons-myleather-camera').offsetHeight + 10;
							
							$ionicScrollDelegate.$getByHandle('myLeatherScrollDelegate').
							scrollTo(0, scrollToY, true);
						}, 
						100);

			}; 
			
			
		});

	}
	

	$scope.capturePhoto = function() {
		var colorCircles = document.getElementsByClassName("color-circle-myleather");
		var innerColorCircles = document.getElementsByClassName("inner-color-circle-myleather");
	    for (var i = 0; i < colorCircles.length; i++) {
	    	innerColorCircles[i].style.backgroundColor = "white";
	    	colorCircles[i].style.border = "1pt solid rgb(124,53,23)";
	    }
	    $scope.colorCircleEnabled = [false, false, false];
		var colorCircleSelected = "colorCircle-1";
		document.getElementById(colorCircleSelected).style.border = "3pt solid rgb(124,53,23)";
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
			destinationType: destinationType.DATA_URL, correctOrientation: true});
	}


//	$scope.capturePhotoEdit = function() {
//		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, allowEdit: true,
//			destinationType: destinationType.DATA_URL, correctOrientation: true});
//	}


	$scope.getPhotoFromLibrary = function() {
		var colorCircles = document.getElementsByClassName("color-circle-myleather");
		var innerColorCircles = document.getElementsByClassName("inner-color-circle-myleather");
	    for (var i = 0; i < colorCircles.length; i++) {
	    	innerColorCircles[i].style.backgroundColor = "white";
	    	colorCircles[i].style.border = "1pt solid rgb(124,53,23)";
	    }
	    $scope.colorCircleEnabled = [false, false, false];
		var colorCircleSelected = "colorCircle-1";
		document.getElementById(colorCircleSelected).style.border = "3pt solid rgb(124,53,23)";
		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
			destinationType: destinationType.FILE_URI,
			sourceType: pictureSource.PHOTOLIBRARY, correctOrientation: true});
	}

//	$scope.getPhotoFromAlbum = function() {
//		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
//			destinationType: destinationType.FILE_URI,
//			sourceType: pictureSource.SAVEDPHOTOALBUM, correctOrientation: true});
//	}

	function onFail(message) {
		setTimeout(function() {
//			alert('Failed because: ' + message);
		}, 0);
	}




	$scope.getPixelColor = function(event) {

		var canvas = document.getElementById('myCanvas');
		var ctx= canvas.getContext("2d");

		ctx.drawImage(clearImage, 0, 0, 300, canvas.height);

		var rect = canvas.getBoundingClientRect();

//		console.log(rect.top, rect.right, rect.bottom, rect.left);

		var xx = event.changedTouches[0].clientX - rect.left;
		var yy = event.changedTouches[0].clientY - rect.top;

		var x = xx*(canvas.width/canvas.clientWidth);
		var y = yy*(canvas.height/canvas.clientHeight);

//		var xxPrevisto = event.changedTouches[0].clientX - rect.left;
//		var xxDiff = xx -xxPrevisto

		var pixelData = ctx.getImageData(x, y, 1, 1).data;

//		console.log("event.changedTouches[0].clientX: " + event.changedTouches[0].clientX +
//		"rect.left: " + rect.left +
//		"event.changedTouches[0].clientX - rect.left = xx: " + xx +
//		"event.changedTouches[0].clientX - 10 = xx previsto: " + (event.changedTouches[0].clientX - 10));
		var color = determineContrastColor(pixelData);

		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.strokeStyle=color;
		ctx.rect(x,y,4,4); 
		ctx.stroke();
//		console.log(pixelData);
		colorCircleSelected = colorAndFindNextSelected(colorCircleSelected, pixelData)

//		console.log('R: ' + pixelData[0] + '<br>G: ' + pixelData[1] + '<br>B: ' + pixelData[2] + '<br>A: ' + pixelData[3]);
//		document.getElementById(colorCircleSelected).style.border = "3pt solid rgb(124,53,23)";
//		document.getElementById("colorCircle-1").style.backgroundColor = "rgb(" + pixelData[0] + "," +
//		pixelData[1] + "," + pixelData[2] + ")";
		$scope.red = pixelData[0];
		$scope.green = pixelData[1];
		$scope.blue = pixelData[2];               
	}
	
	function colorAndFindNextSelected(colorCircleSelected, pixelData) {
//		alert("$scope.colorCircleEnabled: " + $scope.colorCircleEnabled);
		if (pixelData && pixelData.length >= 3)
			document.getElementById("inner-" + colorCircleSelected).style.backgroundColor = "rgb(" + pixelData[0] + "," +
			pixelData[1] + "," + pixelData[2] + ")";
		var colorCircleSelectedSplit = colorCircleSelected.split('-');
		var colorCircleNumber = 1;
		if (colorCircleSelectedSplit && colorCircleSelectedSplit.length > 1){
//			alert("Entro nell'if");
			colorCircleNumber = parseInt(colorCircleSelectedSplit[1]);
		}
//		alert("colorCircleNumber: "+ colorCircleNumber)
		if(!$scope.colorCircleEnabled[colorCircleNumber - 1])
			$scope.colorCircleEnabled[colorCircleNumber - 1] = true;
		
		var colorCircles = document.getElementsByClassName("color-circle-myleather");
		for (var i = 0; i < colorCircles.length; i++) 
	    	colorCircles[i].style.border = "1pt solid rgb(124,53,23)";
	    
		
		for (var j = 1; j < $scope.colorCircleEnabled.length + 1; j++) {
			if(!$scope.colorCircleEnabled[j-1]) {
//				alert("j: " + j);
				colorCircleSelected = "colorCircle-" + j;
//				$scope.colorCircleEnabled[j-1] = true;
				break;
			}
		}
		
		document.getElementById(colorCircleSelected).style.border = "3pt solid rgb(124,53,23)";
		return colorCircleSelected;
//		alert("$scope.colorCircleEnabled: " + $scope.colorCircleEnabled);
//		alert("colorCircleSelected: " + colorCircleSelected);
	}

	function determineContrastColor(pixelData)
	{
		// Counting the perceptive luminance - human eye favors green color...
		if (pixelData && pixelData.length >= 3)
			var a = 1 - ( 0.299 * pixelData[0] + 0.587 * pixelData[1] + 0.114 * pixelData[2])/255;

		if (a < 0.5)
			return "black";
		else
			return "white";
	}
	
	$scope.selectCircle = function(circleNumber) {
//		alert("clicked " + circleNumber);
		var colorCircles = document.getElementsByClassName("color-circle-myleather");
		for (var i = 0; i < colorCircles.length; i++) 
	    	colorCircles[i].style.border = "1pt solid rgb(124,53,23)";
		colorCircleSelected = "colorCircle-" + circleNumber;
		document.getElementById("colorCircle-" + circleNumber).style.border = "3pt solid rgb(124,53,23)";
	}
	
	$scope.oneColorCircleEnabled = function() {
		for (var k = 0; k < $scope.colorCircleEnabled.length; k++)
			if($scope.colorCircleEnabled[k])
				return false;
		return true;
	}
	
	$scope.deleteCircle = function(circleNumber) {
		var colorCircles = document.getElementsByClassName("color-circle-myleather");
		for (var i = 0; i < colorCircles.length; i++) 
	    	colorCircles[i].style.border = "1pt solid rgb(124,53,23)";
		colorCircleSelected = "colorCircle-" + circleNumber;
		document.getElementById("colorCircle-" + circleNumber).style.border = "3pt solid rgb(124,53,23)";
		document.getElementById("inner-" + colorCircleSelected).style.backgroundColor = "white";
		$scope.colorCircleEnabled[circleNumber-1] = false;
	}
});