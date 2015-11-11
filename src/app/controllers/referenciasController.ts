module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface ReferenciasControllerScope extends ng.IScope {
    }

    export class ReferenciasController {

        public scope: ReferenciasControllerScope;

        constructor($scope: ReferenciasControllerScope) {
            this.scope = $scope;
        }
    }
}
