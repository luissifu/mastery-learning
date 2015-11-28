module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface EvaluacionesControllerScope extends ng.IScope {
        evaluations: Models.Evaluation[];
    }

    export class EvaluacionesController {

        public scope: EvaluacionesControllerScope;

        constructor($scope: EvaluacionesControllerScope) {
            $scope.evaluations = [];
            $scope.evaluations.push(new Models.Evaluation(5, 'Primer examen parcial', 'Mis Documentos'));
            $scope.evaluations.push(new Models.Evaluation(6, 'Segundo examen parcial', 'Mis Documentos'));
            $scope.evaluations.push(new Models.Evaluation(7, 'Examen Final', 'Mis Documentos'));
            this.scope = $scope;
        }
    }
}
