module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CourseDetailControllerScope extends ng.IScope {
        course: Models.Course;
    }

    export class CourseDetailController {

        public scope: CourseDetailControllerScope;

        constructor($scope: CourseDetailControllerScope) {
            this.scope = $scope;
        }
    }
}
