module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface SideBarControllerScope extends ng.IScope {
    }

    export class SideBarController {

        public scope: SideBarControllerScope;

        constructor($scope: SideBarControllerScope) {
            this.scope = $scope;
        }
    }
}
