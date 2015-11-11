module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface ProfCoursesControllerScope extends ng.IScope {
    }

    export class ProfCoursesController {

        public scope: ProfCoursesControllerScope;

        constructor($scope: ProfCoursesControllerScope) {
            this.scope = $scope;
        }
    }
}
