module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface InteraccionesControllerScope extends ng.IScope {
    }

    export class InteraccionesController {

        public scope: InteraccionesControllerScope;

        constructor($scope: InteraccionesControllerScope) {
            this.scope = $scope;
        }
    }
}
