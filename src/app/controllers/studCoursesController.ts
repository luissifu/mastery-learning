module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface StudCoursesControllerScope extends ng.IScope {
        nodos: Models.Course[];
    }

    export class StudCoursesController {

        public scope: StudCoursesControllerScope;

        constructor($scope: StudCoursesControllerScope) {
            $scope.nodos = [];
            $scope.nodos.push(new ML.Models.Course(2, 'Aleman 1', 'Curso impartido por Yara Iruegas.'));
            this.scope = $scope;
        }
    }
}
