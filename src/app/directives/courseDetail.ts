module ML.Directives {
    export class CourseDetail {
        constructor() {
            return this.createDirective();
        }

        private createDirective(): any {
            return <ng.IDirective>{
                controller: ML.Controllers.CourseDetailController,
                restrict: 'E',
                templateUrl: 'views/course_detail.html',
                replace: true,
                scope: { //Ahora el scope tendra todas las propiedades que le enviamos :)
                    // Es importante notar que si no ponemos scope tendra un shared scope con su padre (en vez de uno propio)
                    course: "=",
                },
                link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                    element.find('.back-button').on('click', function () {
                        window.history.back();
                    });
                }
            };
        }
    }
}
