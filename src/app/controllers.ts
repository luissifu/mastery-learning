// parciales
appModule.controller(
  'navBarController',
  ['$scope', ($scope) => new ML.Controllers.NavBarController($scope)]
);
appModule.controller(
  'sideBarController',
  ['$scope', ($scope) => new ML.Controllers.SideBarController($scope)]
);
appModule.controller(
  'popupController',
  ['$scope', ($scope) => new ML.Controllers.PopupController($scope)]
);
// nodos
appModule.controller(
  'homeController',
  ['$scope', ($scope) => new ML.Controllers.HomeController($scope)]
);
appModule.controller(
  'studCoursesController',
  ['$scope', ($scope) => new ML.Controllers.StudCoursesController($scope)]
);
appModule.controller(
  'profCoursesController',
  ['$scope', ($scope) => new ML.Controllers.ProfCoursesController($scope)]
);
appModule.controller(
  'courseDetailController',
  ['$scope', ($scope) => new ML.Controllers.CourseDetailController($scope)]
);
// crear curso
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
// ver curso
appModule.controller(
  'courseController',
  ['$scope', ($scope) => new ML.Controllers.CourseController($scope)]
);
appModule.controller(
  'competenciasController',
  ['$scope', ($scope) => new ML.Controllers.CompetenciasController($scope)]
);
appModule.controller(
  'evaluacionesController',
  ['$scope', ($scope) => new ML.Controllers.EvaluacionesController($scope)]
);
appModule.controller(
  'interaccionesController',
  ['$scope', ($scope) => new ML.Controllers.InteraccionesController($scope)]
);
appModule.controller(
  'nivelesController',
  ['$scope', ($scope) => new ML.Controllers.NivelesController($scope)]
);
appModule.controller(
  'referenciasController',
  ['$scope', ($scope) => new ML.Controllers.ReferenciasController($scope)]
);
