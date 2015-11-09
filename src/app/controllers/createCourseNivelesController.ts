module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseNivelesControllerScope extends ng.IScope {
    }

    export class CreateCourseNivelesController {

        public scope: CreateCourseNivelesControllerScope;

        constructor($scope: CreateCourseNivelesControllerScope) {
            this.scope = $scope;
        }
    }
}
