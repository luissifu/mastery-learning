module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseNivelesControllerScope extends ng.IScope {
        competence: Models.Competence;
        levels: Models.Level[];
        edit: ($event: Event, level: Models.Level) => void;
        change: ($event: KeyboardEvent, level: Models.Level) => void;
        newLevel: ($event: Event) => void;
    }

    export class CreateCourseNivelesController {
        public static idS = 10;

        public scope: CreateCourseNivelesControllerScope;

        constructor($scope: CreateCourseNivelesControllerScope) {
            var competence = $scope.competence = new Models.Competence(1, '', null, []);
            competence.children.push(new Models.Competence(1, 'Hablar fluido el aleman', competence, null));
            var testChildren: Models.Competence[] = [];
            var comp2 = new Models.Competence(2, 'Poder escribir el aleman', competence, null);
            testChildren.push(new Models.Competence(3, 'Hola, soy un hijo', comp2, null));
            var testChildren2: Models.Competence[] = [];
            testChildren2.push(new Models.Competence(4, 'Hola, soy un hijo nuevo', testChildren[0], null));
            testChildren2.push(new Models.Competence(5, 'Hola, soy un hijo nuevo Kappa', testChildren[0], null));
            testChildren2.push(new Models.Competence(6, 'Hola, soy un hijo nuevo Keepo', testChildren[0], null));
            testChildren[0].children = testChildren2;
            comp2.children = testChildren;
            competence.children.push(comp2);
            $scope.levels = [];
            $scope.levels.push(new Models.Level(5, 'Basico'));
            $scope.levels.push(new Models.Level(6, 'Intermedio'));
            $scope.levels.push(new Models.Level(7, 'Avanzado'));
            $scope.edit = this.edit;
            $scope.newLevel = ($event: Event) => {
                $scope.levels.push(
                    new Models.Level(
                        CreateCourseNivelesController.idS++,
                        'Hola, soy un nivel nuevo :3'
                    )
                );
            };
            $scope.change = ($event: KeyboardEvent, level: Models.Level) => {
                var enterKey = 13;
                if ($event.keyCode === enterKey) {
                    level.edit = false;
                }
            };
            this.scope = $scope;
        }

        private edit($event: Event, level: Models.Competence): void {
            level.edit = true;
            //Super hack, we probably dont want this
            setTimeout(function () { $($($event.currentTarget)[0].parentNode).find('input')[0].focus(); }, 50);
        }
    }
}
