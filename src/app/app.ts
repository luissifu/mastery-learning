var appModule = angular.module('masteryLearning', []);

// Controllers
appModule.controller(
  'navBarController',
  ['$scope', ($scope) => new ML.Controllers.NavBarController($scope)]
);
appModule.controller(
  'HomeController',
  ['$scope', ($scope) => new ML.Controllers.HomeController($scope)]
);
appModule.controller(
  'sideBarController',
  ['$scope', ($scope) => new ML.Controllers.SideBarController($scope)]
);
appModule.controller(
  'competenciasController',
  ['$scope', ($scope) => new ML.Controllers.CompetenciasController($scope)]
);
appModule.controller(
  'courseController',
  ['$scope', ($scope) => new ML.Controllers.CourseController($scope)]
);
appModule.controller(
  'courseDetailController',
  ['$scope', ($scope) => new ML.Controllers.CourseDetailController($scope)]
);
appModule.controller(
  'createCourseController',
  ['$scope', ($scope) => new ML.Controllers.CreateCourseController($scope)]
);
appModule.controller(
  'createCourseCompetenciasController',
  ['$scope', ($scope) => new ML.Controllers.CreateCourseCompetenciasController($scope)]
);
appModule.controller(
  'createCourseEvaluacionesController',
  ['$scope', ($scope) => new ML.Controllers.CreateCourseEvaluacionesController($scope)]
);
appModule.controller(
  'createCourseInteraccionesController',
  ['$scope', ($scope) => new ML.Controllers.CreateCourseInteraccionesController($scope)]
);
appModule.controller(
  'createCourseNivelesController',
  ['$scope', ($scope) => new ML.Controllers.CreateCourseNivelesController($scope)]
);
appModule.controller(
  'createCourseReferenciasController',
  ['$scope', ($scope) => new ML.Controllers.CreateCourseReferenciasController($scope)]
);

// Directives
appModule.directive(
  'navBar',
  () => new ML.Directives.NavBar()
);
appModule.directive(
  'home',
  () => new ML.Directives.Home()
);
appModule.directive(
  'sideBar',
  () => new ML.Directives.SideBar()
);
appModule.directive(
  'competencias',
  () => new ML.Directives.Competencias()
);
appModule.directive(
  'course',
  () => new ML.Directives.Course()
);
appModule.directive(
  'courseDetail',
  () => new ML.Directives.CourseDetail()
);
appModule.directive(
  'createCourse',
  () => new ML.Directives.CreateCourse()
);
appModule.directive(
  'createCourseCompetencias',
  () => new ML.Directives.CreateCourseCompetencias()
);
appModule.directive(
  'createCourseEvaluaciones',
  () => new ML.Directives.CreateCourseEvaluaciones()
);
appModule.directive(
  'createCourseInteracciones',
  () => new ML.Directives.CreateCourseInteracciones()
);
appModule.directive(
  'createCourseNiveles',
  () => new ML.Directives.CreateCourseNiveles()
);
appModule.directive(
  'createCourseReferencias',
  () => new ML.Directives.CreateCourseReferencias()
);
