module ML.Controllers {

    export interface HomeControllerScope extends ng.IScope {
        nodos : ML.Models.Course[];
    }

    export class HomeController {

        public scope: HomeControllerScope;

        constructor($scope: HomeControllerScope) {
            $scope.nodos = [];
            $scope.nodos.push(new ML.Models.Course(1, 'Frances 1', 'Curso impartido por Juan Francisco Salazar.'));
            $scope.nodos.push(new ML.Models.Course(2, 'Aleman 1', 'Curso impartido por Yara Iruegas.'));
            this.scope = $scope;
        }
    }

}
