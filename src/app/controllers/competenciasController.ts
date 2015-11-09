module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CompetenciasControllerScope extends ng.IScope {
    }

    export class CompetenciasController {

        public scope: CompetenciasControllerScope;

        constructor($scope: CompetenciasControllerScope) {
            this.scope = $scope;
        }
    }
}
