module ML.Controllers {

    export interface HomeControllerScope extends ng.IScope {
        nodos : ML.Models.Nodo[];
    }

    export class HomeController {

        public scope: HomeControllerScope;

        constructor($scope: HomeControllerScope) {
            $scope.nodos = [];
            $scope.nodos.push(new ML.Models.Nodo(1, 'Prueba'));
            $scope.nodos.push(new ML.Models.Nodo(2, 'Segundo'));
            this.scope = $scope;
        }
    }
    
}
