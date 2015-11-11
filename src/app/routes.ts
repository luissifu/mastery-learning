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
    .state('courses.student', {
      url: '/student',
      template: '<stud-courses></stud-courses>'
    })
    .state('courses.professor', {
      url: '/professor',
      template: '<prof-courses></prof-courses>'
    })
    .state('courses.new', {
      url: '/new',
      template: '<create-course></create-course>'
    })
    .state('courses.detail', {
      url: '/:id',
      template: '<course></<course>'
    })

});
