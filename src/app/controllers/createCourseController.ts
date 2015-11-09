module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseControllerScope extends ng.IScope {
    }

    export class CreateCourseController {

        public scope: CreateCourseControllerScope;

        constructor($scope: CreateCourseControllerScope) {
            this.scope = $scope;
        }
    }
}
