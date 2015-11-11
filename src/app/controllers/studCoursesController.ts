module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface StudCoursesControllerScope extends ng.IScope {
    }

    export class StudCoursesController {

        public scope: StudCoursesControllerScope;

        constructor($scope: StudCoursesControllerScope) {
            this.scope = $scope;
        }
    }
}
