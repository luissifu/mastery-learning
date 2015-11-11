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
