module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface PopupControllerScope extends ng.IScope {
    }

    export class PopupController {

        public scope: PopupControllerScope;

        constructor($scope: PopupControllerScope) {
            this.scope = $scope;
        }
    }
}
