var myTicTacToeApp = angular.module('myTicTacToeApp', []);

myTicTacToeApp.controller('MyTicTacToeApp', function ($scope) {

 	$scope.testString = "Is this hooked up correctly????";
 	//test button

	$scope.test = function() {
		console.log('This is working.');
	};

	//change cell color

	$scope.change = function() {

	};

	//creating the cells

	$scope.cellList = [
	{status: "c01", move:""},
	{status: "c02", move:""},
	{status: "c03", move:""},
	{status: "c04", move:""},
	{status: "c05", move:""},
	{status: "c06", move:""},
	{status: "c07", move:""},
	{status: "c08", move:""},
	{status: "c09", move:""}
	] ;

	$scope.movecounter = 0 ;

	$scope.select = function() {
		console.log('Change Color.') ;
	};

	$scope.playerPicks = function(thisCell) {
		$scope.movecounter = $scope.movecounter + 1 ;
		console.log('Change Color.') ;
		if (($scope.movecounter % 2) == 1) {
			thisCell.move = "X" ;
			
		}
		else {
			thisCell.move = "O";
			
		}
		console.log("Cells is now: " + thisCell.move) ;

	};







});