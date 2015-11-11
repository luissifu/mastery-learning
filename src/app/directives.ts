// parciales
appModule.directive(
  'navBar',
  () => new ML.Directives.NavBar()
);
appModule.directive(
  'sideBar',
  () => new ML.Directives.SideBar()
);
appModule.directive(
  'popup',
  () => new ML.Directives.Popup()
);
// nodos
appModule.directive(
  'home',
  () => new ML.Directives.Home()
);
appModule.directive(
  'studCourses',
  () => new ML.Directives.StudCourses()
);
appModule.directive(
  'profCourses',
  () => new ML.Directives.ProfCourses()
);
appModule.directive(
  'courseDetail',
  () => new ML.Directives.CourseDetail()
);
// crear curso
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
// ver curso
appModule.directive(
  'course',
  () => new ML.Directives.Course()
);
appModule.directive(
  'competencias',
  () => new ML.Directives.Competencias()
);
appModule.directive(
  'evaluaciones',
  () => new ML.Directives.Evaluaciones()
);
appModule.directive(
  'interacciones',
  () => new ML.Directives.Interacciones()
);
appModule.directive(
  'niveles',
  () => new ML.Directives.Niveles()
);
appModule.directive(
  'referencias',
  () => new ML.Directives.Referencias()
);
