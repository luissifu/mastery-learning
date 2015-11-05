var appModule = angular.module('masteryLearning', []);

// Controllers
appModule.controller('navBarController', ['$scope', ($scope) => new ML.Controllers.NavBarController($scope)]);

// Directives
appModule.directive('navBar', () => new ML.Directives.NavBar());
