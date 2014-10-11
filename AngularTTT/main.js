var myTicTacToeApp = angular.module('myTicTacToeApp', []);

myTicTacToeApp.controller('MyTicTacToeApp', function ($scope) {

 	//test button

	$scope.test = function() {
		console.log('This is working.');
	};


	//creating the cells

	$scope.cells = [
	{status: "c01"},
	{status: "c02"},
	{status: "c03"},
	{status: "c04"},
	{status: "c05"},
	{status: "c06"},
	{status: "c07"},
	{status: "c08"},
	{status: "c09"},
	];
	




});