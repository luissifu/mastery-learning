module ML.Directives {
    export class Niveles {
        constructor() {
            return this.createDirective();
        }

        private createDirective(): any {
            return <ng.IDirective>{
                controller: ML.Controllers.NivelesController,
                restrict: 'E',
                templateUrl: 'views/niveles.html',
                replace: true,
                scope: { //Ahora el scope tendra todas las propiedades que le enviamos :)
                    // Es importante notar que si no ponemos scope tendra un shared scope con su padre (en vez de uno propio)
                    // properties: "="
                }
                /*link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                    // El link hara todo lo que pongamos aqui antes de inicializar al controlador
                    // Idealmente queremos no utilizar el link y hacer todo en el controlador, si no usamos el link es mejor quitarlo
                }*/
            };
        }
    }
}
