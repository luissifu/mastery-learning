module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface EvaluacionesControllerScope extends ng.IScope {
    }

    export class EvaluacionesController {

        public scope: EvaluacionesControllerScope;

        constructor($scope: EvaluacionesControllerScope) {
            this.scope = $scope;
        }
    }
}
