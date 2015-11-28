module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface InteraccionesControllerScope extends ng.IScope {
        interactions: Models.Interaction[];
    }

    export class InteraccionesController {

        public scope: InteraccionesControllerScope;

        constructor($scope: InteraccionesControllerScope) {
            $scope.interactions = [];
            $scope.interactions.push(new Models.Interaction(5, 'Individual', 'El alumno trabaja y esudia por su cuenta.'));
            $scope.interactions.push(new Models.Interaction(6, 'Pareja', 'El primer alumno pregunta y el segundo responde.'));
            $scope.interactions.push(new Models.Interaction(7, 'Equipos', 'Se distribuye la tarea equitativamente.'));
            this.scope = $scope;
        }
    }
}
