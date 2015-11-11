appModule.config(($stateProvider, $locationProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    })
    .state('courses', {
      url: '/courses',
      template: '<home></home>'
    })
    .state('courses.create', {
      url: '/create',
      template: '<create-course></create-course>'
    })
    .state('courses.detail', {
      url: '/course/:id',
      template: '<course></<course>'
    });

  // $locationProvider.html5Mode(true);
});
