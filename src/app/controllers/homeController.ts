module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface HomeControllerScope extends ng.IScope {
    }

    export class HomeController {

        public scope: HomeControllerScope;

        constructor($scope: HomeControllerScope) {
            this.scope = $scope;
        }
    }
}
