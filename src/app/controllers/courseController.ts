module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CourseControllerScope extends ng.IScope {
        course: Models.Course;
    }

    export class CourseController {

        public scope: CourseControllerScope;

        constructor($scope: CourseControllerScope) {
            if (!$scope.course) {
                $scope.course = new Models.Course(1, "Curso Prueba", "Curso creado como prueba");
            }
            this.scope = $scope;
        }
    }
}
