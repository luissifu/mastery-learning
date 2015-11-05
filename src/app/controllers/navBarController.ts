module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface NavBarControllerScope extends ng.IScope {
    }

    export class NavBarController {

        public scope: NavBarControllerScope;

        constructor($scope: NavBarControllerScope) {
            this.scope = $scope;
        }
    }
}