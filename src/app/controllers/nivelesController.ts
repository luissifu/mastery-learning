module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface NivelesControllerScope extends ng.IScope {
    }

    export class NivelesController {

        public scope: NivelesControllerScope;

        constructor($scope: NivelesControllerScope) {
            this.scope = $scope;
        }
    }
}
