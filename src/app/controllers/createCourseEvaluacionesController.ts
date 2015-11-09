module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseEvaluacionesControllerScope extends ng.IScope {
    }

    export class CreateCourseEvaluacionesController {

        public scope: CreateCourseEvaluacionesControllerScope;

        constructor($scope: CreateCourseEvaluacionesControllerScope) {
            this.scope = $scope;
        }
    }
}
