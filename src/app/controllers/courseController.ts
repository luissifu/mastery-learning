module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CourseControllerScope extends ng.IScope {
    }

    export class CourseController {

        public scope: CourseControllerScope;

        constructor($scope: CourseControllerScope) {
            this.scope = $scope;
        }
    }
}
