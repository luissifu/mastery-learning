module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface ReferenciasControllerScope extends ng.IScope {
        references: Models.Reference[];
    }

    export class ReferenciasController {

        public scope: ReferenciasControllerScope;

        constructor($scope: ReferenciasControllerScope) {
            $scope.references = [];
            $scope.references.push(new Models.Reference(5, 'Google', 'http://www.google.com'));
            $scope.references.push(new Models.Reference(6, 'Facebook', 'http://www.facebook.com'));
            $scope.references.push(
                new Models.Reference(
                    7,
                    'Wikipedia - Miller Rabin', 'https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test'
                )
            );
            this.scope = $scope;
        }
    }
}
