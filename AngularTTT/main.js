var myTicTacToeApp = angular.module('myTicTacToeApp', ["firebase"]);

myTicTacToeApp.controller('MyTicTacToeApp', function ($scope,$firebase) {

$scope.remoteGameContainer = 
  $firebase(new Firebase("https://tttpaulgarb.firebaseIO.com/databaseGameContainer")) ;


	//creating the cells

	$scope.cellList = [
	{status: "c01", move:"1"},
	{status: "c02", move:"2"},
	{status: "c03", move:"3"},
	{status: "c04", move:"4"},
	{status: "c05", move:"5"},
	{status: "c06", move:"6"},
	{status: "c07", move:"7"},
	{status: "c08", move:"8"},
	{status: "c09", move:"9"}
	] ;

	$scope.movecounter = 0 ;

	// receives players position
	$scope.playerMovesX = [];
	$scope.playerMovesO = [];


	// Firebase hookup here
	$scope.gameContainer = {
		cellListArray: $scope.cellList,
		moveCount: $scope.movecounter
	};


	// Angular stuff here
	$scope.remoteGameContainer.$bind($scope, "gameContainer") ;

	$scope.$watch('gameContainer' , function() {
		console.log('gameContainer changed!') ;
	});

	
	// Determines which player's move it is
	$scope.playerPicks = function(thisCell) {
		$scope.gameContainer.moveCount = $scope.gameContainer.moveCount + 1 ;
		if (($scope.gameContainer.moveCount % 2) == 1) {
			thisCell.move = "X" ;
			$scope.playerMovesX.push(thisCell.status);
		}
		else {
			thisCell.move = "O";	
			$scope.playerMovesO.push(thisCell.status);
		}
		console.log("Cells is now: " + thisCell.move) ;
		console.log($scope.playerMovesX);




	};

	// The following are the winning combinations
	[ 1, 2, 3 ];
	[ 4, 5, 6 ];
	[ 7, 8, 9 ];
	[ 1, 4, 7 ];
	[ 2, 5, 8 ];
	[ 3, 6, 9 ];
	[ 1, 5, 9 ];
	[ 3, 5, 7 ]

	


 	//test button

	$scope.test = function() {
		console.log('This is working.');
	};







});