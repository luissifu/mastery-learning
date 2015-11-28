module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseInteraccionesControllerScope extends ng.IScope {
        competence: Models.Competence;
        interactions: Models.Interaction[];
        editName: ($event: Event, reference: Models.Interaction) => void;
        changeName: ($event: KeyboardEvent, reference: Models.Interaction) => void;
        editDescription: ($event: Event, reference: Models.Interaction) => void;
        changeDescription: ($event: KeyboardEvent, reference: Models.Interaction) => void;
        newInteraction: ($event: Event, reference: Models.Interaction) => void;
    }

    export class CreateCourseInteraccionesController {
        public static idS = 10;

        public scope: CreateCourseInteraccionesControllerScope;

        constructor($scope: CreateCourseInteraccionesControllerScope) {
            var competence = $scope.competence = new Models.Competence(1, "", null, []);
            competence.children.push(new Models.Competence(1, "Hablar fluido el aleman", competence, null));
            var testChildren: Models.Competence[] = [];
            var comp2 = new Models.Competence(2, "Poder escribir el aleman", competence, null);
            testChildren.push(new Models.Competence(3, "Hola, soy un hijo", comp2, null));
            var testChildren2: Models.Competence[] = [];
            testChildren2.push(new Models.Competence(4, "Hola, soy un hijo nuevo", testChildren[0], null));
            testChildren2.push(new Models.Competence(5, "Hola, soy un hijo nuevo Kappa", testChildren[0], null));
            testChildren2.push(new Models.Competence(6, "Hola, soy un hijo nuevo Keepo", testChildren[0], null));
            testChildren[0].children = testChildren2;
            comp2.children = testChildren;
            competence.children.push(comp2);
            $scope.interactions = [];
            $scope.interactions.push(new Models.Interaction(5, "Individual", "El alumno trabaja y esudia por su cuenta."));
            $scope.interactions.push(new Models.Interaction(6, "Pareja", "El primer alumno pregunta y el segundo responde."));
            $scope.interactions.push(new Models.Interaction(7, "Equipos", "Se distribuye la tarea equitativamente."));
            $scope.editName = this.editName;
            $scope.editDescription = this.editDescription;
            $scope.newInteraction = ($event: Event) => {
                $scope.interactions.push(new Models.Interaction(CreateCourseInteraccionesController.idS++, "Nueva Interaccion", "Describir la interaccion"));
            };
            $scope.changeName = ($event: KeyboardEvent, interaction: Models.Interaction) => {
                var enterKey = 13;
                if ($event.keyCode == enterKey) {
                    interaction.editName = false;
                }
            }
            $scope.changeDescription = ($event: KeyboardEvent, interaction: Models.Interaction) => {
                var enterKey = 13;
                if ($event.keyCode == enterKey) {
                    interaction.editDescription = false;
                }
            }
            this.scope = $scope;
        }

        private editName($event: Event, interaction: Models.Interaction): void {
            interaction.editName = true;
            //Super hack, we probably dont want this
            setTimeout(function () { $($($event.currentTarget)[0].parentNode).find('input')[0].focus(); }, 50);
        }

        private editDescription($event: Event, interaction: Models.Interaction): void {
            interaction.editDescription = true;
            //Super hack, we probably dont want this
            setTimeout(function () { $($($event.currentTarget)[0].parentNode).find('input')[0].focus(); }, 50);
        }
    }
}
