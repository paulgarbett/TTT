var myTicTacToeApp = angular.module('myTicTacToeApp', ["firebase"]);

myTicTacToeApp.controller('MyTicTacToeApp', function ($scope,$firebase) {

$scope.remoteGameContainer = 
  $firebase(new Firebase("https://tttpaulgarb.firebaseIO.com/databaseGameContainer")) ;


	//creating the cells

	$scope.cellList = [
	{status: "c00", move:"0", indice: 0},
	{status: "c01", move:"1", indice: 1},
	{status: "c02", move:"2", indice: 2},
	{status: "c03", move:"3", indice: 3},
	{status: "c04", move:"4", indice: 4},
	{status: "c05", move:"5", indice: 5},
	{status: "c06", move:"6", indice: 6},
	{status: "c07", move:"7", indice: 7},
	{status: "c08", move:"8", indice: 8},
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
	// Also pushes cells 
	$scope.playerPicks = function(thisCell) {
		$scope.gameContainer.moveCount = $scope.gameContainer.moveCount + 1 ;
		if (($scope.gameContainer.moveCount % 2) == 1) {
			thisCell.move = "X" ;
			$scope.playerMovesX.push(thisCell.indice);
		}
		else {
			thisCell.move = "O";	
			$scope.playerMovesO.push(thisCell.indice);
		}
		console.log("Cells is now: " + thisCell.move) ;
		console.log($scope.playerMovesX);
       $scope.winningFunction();
     




	$scope.winningFunction = function(moves) {
    var winningArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 5, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]; // end of possible winning combos winningArrays

    for(var i = 0; i < winningArrays.length; ++i) {//loops through the 8 arrays
      var howManyMatches = 0;
      var thisWinner = winningArrays[i];
      for (var j = 0; j < thisWinner.length; j++) {// loops through each number of each array
        for (var m = 0; m < moves.length; m++) {// loops through the players moves thusfar
          if (moves[m] == thisWinner[j]) {// if player moves matches with a win condition, we run the counter
            console.log("Match - ", thisWinner, moves[m]);
            howManyMatches++;
            break;
          }
        }
      }
      if(howManyMatches == 3) {// does the total matches reach 3?
        if ($scope.gameContainer.playerPicks === false) {
          $scope.callWinner1();
        }
        else {
          $scope.callWinner2();
        }
      }
    }
  };  //end of winningFunction for loop



	// $scope.winningFunciton = funciton(moves) {
	// 	var winningArrays = [
	// 		[ 1, 2, 3 ],
	// 		[ 4, 5, 6 ],
	// 		[ 7, 8, 9 ],
	// 		[ 1, 4, 7 ],
	// 		[ 2, 5, 8 ],
	// 		[ 3, 6, 9 ],
	// 		[ 1, 5, 9 ],
	// 		[ 3, 5, 7 ]
	// 		]; //end of possible winning combinations





	// }; // end of wining function


	


 	//test button

	$scope.test = function() {
		console.log('This is working.');
	};






}

});


