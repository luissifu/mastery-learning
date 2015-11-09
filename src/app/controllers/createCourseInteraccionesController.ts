module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseInteraccionesControllerScope extends ng.IScope {
    }

    export class CreateCourseInteraccionesController {

        public scope: CreateCourseInteraccionesControllerScope;

        constructor($scope: CreateCourseInteraccionesControllerScope) {
            this.scope = $scope;
        }
    }
}
