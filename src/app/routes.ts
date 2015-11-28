appModule.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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
        .state('coursesStudent', {
            url: '/courses/student',
            template: '<stud-courses></stud-courses>'
        })
        .state('coursesProfessor', {
            url: '/courses/professor',
            template: '<prof-courses></prof-courses>'
        })
        .state('coursesDetail', {
            url: '/courses/detail/:course',
            templateProvider: ($stateParams) => {
                return '<course-detail course=\'' + $stateParams.course + '\'></course-detail>';
            },
        })
    // crear curso
        .state('coursesNew', {
            url: '/courses/new',
            template: '<create-course></create-course>'
        })
        .state('coursesNewComp', {
            url: '/courses/new/competencias',
            template: '<create-course-competencias></create-course-competencias>'
        })
        .state('coursesNewEval', {
            url: '/courses/new/evaluaciones',
            template: '<create-course-evaluaciones></create-course-evaluaciones>'
        })
        .state('coursesNewInte', {
            url: '/courses/new/interacciones',
            template: '<create-course-interacciones></create-course-interacciones>'
        })
        .state('coursesNewNivl', {
            url: '/courses/new/niveles',
            template: '<create-course-niveles></create-course-niveles>'
        })
        .state('coursesNewRefs', {
            url: '/courses/new/referencias',
            template: '<create-course-referencias></create-course-referencias>'
        })
    // ver curso
        .state('coursesView', {
            url: '/courses/view/:course',
            templateProvider: ($stateParams) => {
                return '<course course=\'' + $stateParams.course + '\'></course>';
            },
        })
        .state('coursesView.comp', {
            url: '/competencias',
            template: '<competencias></competencias>'
        })
        .state('coursesView.eval', {
            url: '/evaluaciones',
            template: '<evaluaciones></evaluaciones>'
        })
        .state('coursesView.inte', {
            url: '/interacciones',
            template: '<interacciones></interacciones>'
        })
        .state('coursesView.nivl', {
            url: '/niveles',
            template: '<niveles></niveles>'
        })
        .state('coursesView.refs', {
            url: '/referencias',
            template: '<referencias></referencias>'
        });
});
