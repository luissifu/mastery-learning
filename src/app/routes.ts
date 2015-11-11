appModule.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      template: '<home></home>'
    })
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
    .state('courses_new', {
      url: '/courses/new',
      template: '<create-course></create-course>'
    })
    .state('courses_detail', {
      url: '/courses/:id',
      template: '<course></<course>'
    });

});
