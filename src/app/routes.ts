appModule.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    // default
    .state('index', {
      url: '/',
      template: '<home></home>'
    })
    // nodos
    .state('home', {
      url: '/home',
      template: '<home></home>'
    })
    .state('courses', {
      url: '/courses',
      template: '<home></home>'
    })
    .state('courses_student', {
      url: '/courses/student',
      template: '<stud-courses></stud-courses>'
    })
    .state('courses_professor', {
      url: '/courses/professor',
      template: '<prof-courses></prof-courses>'
    })
    .state('courses_detail', {
      url: '/courses/detail/:id',
      template: '<course-detail></<course-detail>'
    })
    // crear curso
    .state('courses_new', {
      url: '/courses/new',
      template: '<create-course></create-course>'
    })
    .state('courses_new_comp', {
      url: '/courses/new/competencias',
      template: '<create-course-competencias></create-course-competencias>'
    })
    .state('courses_new_eval', {
      url: '/courses/new/evaluaciones',
      template: '<create-course-evaluaciones></create-course-evaluaciones>'
    })
    .state('courses_new_inte', {
      url: '/courses/new/interacciones',
      template: '<create-course-interacciones></create-course-interacciones>'
    })
    .state('courses_new_nivl', {
      url: '/courses/new/niveles',
      template: '<create-course-niveles></create-course-niveles>'
    })
    .state('courses_new_refs', {
      url: '/courses/new/referencias',
      template: '<create-course-referencias></create-course-referencias>'
    })
    // ver curso
    .state('courses_view', {
      url: '/courses/view/:id',
      template: '<course></course>'
    })
    .state('courses_view_comp', {
      url: '/courses/view/:id/competencias',
      template: '<competencias></competencias>'
    })
    .state('courses_view_eval', {
      url: '/courses/view/:id/evaluaciones',
      template: '<evaluaciones></evaluaciones>'
    })
    .state('courses_view_inte', {
      url: '/courses/view/:id/interacciones',
      template: '<interacciones></interacciones>'
    })
    .state('courses_view_nivl', {
      url: '/courses/view/:id/niveles',
      template: '<niveles></niveles>'
    })
    .state('courses_view_refs', {
      url: '/courses/view/:id/referencias',
      template: '<referencias></referencias>'
    });

});
