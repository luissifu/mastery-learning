module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseCompetenciasControllerScope extends ng.IScope {
    }

    export class CreateCourseCompetenciasController {

        public scope: CreateCourseCompetenciasControllerScope;

        constructor($scope: CreateCourseCompetenciasControllerScope) {
            this.scope = $scope;
        }
    }
}
