module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseReferenciasControllerScope extends ng.IScope {
    }

    export class CreateCourseReferenciasController {

        public scope: CreateCourseReferenciasControllerScope;

        constructor($scope: CreateCourseReferenciasControllerScope) {
            this.scope = $scope;
        }
    }
}
