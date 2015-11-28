module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface NivelesControllerScope extends ng.IScope {
        levels: Models.Level[];
    }

    export class NivelesController {

        public scope: NivelesControllerScope;

        constructor($scope: NivelesControllerScope) {
            $scope.levels = [];
            $scope.levels.push(new Models.Level(5, 'Basico'));
            $scope.levels.push(new Models.Level(6, 'Intermedio'));
            $scope.levels.push(new Models.Level(7, 'Avanzado'));
            this.scope = $scope;
        }
    }
}
