module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseReferenciasControllerScope extends ng.IScope {
        competence: Models.Competence;
        references: Models.Reference[];
        editName: ($event: Event, reference: Models.Reference) => void;
        changeName: ($event: KeyboardEvent, reference: Models.Reference) => void;
        editUrl: ($event: Event, reference: Models.Reference) => void;
        changeUrl: ($event: KeyboardEvent, reference: Models.Reference) => void;
        newReference: ($event: Event, reference: Models.Reference) => void;
    }

    export class CreateCourseReferenciasController {
        public static idS = 10;

        public scope: CreateCourseReferenciasControllerScope;

        constructor($scope: CreateCourseReferenciasControllerScope) {
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
            $scope.references = [];
            $scope.references.push(new Models.Reference(5, 'Google', 'http://www.google.com'));
            $scope.references.push(new Models.Reference(6, 'Facebook', 'http://www.facebook.com'));
            $scope.references.push(
                new Models.Reference(
                    7,
                    'Wikipedia - Miller Rabin',
                    'https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test'
                )
            );
            $scope.editName = this.editName;
            $scope.editUrl = this.editUrl;
            $scope.newReference = ($event: Event) => {
                $scope.references.push(new Models.Reference(CreateCourseReferenciasController.idS++, 'Google', 'http://www.google.com'));
            };
            $scope.changeName = ($event: KeyboardEvent, reference: Models.Reference) => {
                var enterKey = 13;
                if ($event.keyCode === enterKey) {
                    reference.editName = false;
                }
            };
            $scope.changeUrl = ($event: KeyboardEvent, reference: Models.Reference) => {
                var enterKey = 13;
                if ($event.keyCode === enterKey) {
                    reference.editUrl = false;
                }
            };
            this.scope = $scope;
        }

        private editName($event: Event, reference: Models.Reference): void {
            reference.editName = true;
            //Super hack, we probably dont want this
            setTimeout(function () { $($($event.currentTarget)[0].parentNode).find('input')[0].focus(); }, 50);
        }

        private editUrl($event: Event, reference: Models.Reference): void {
            reference.editUrl = true;
            //Super hack, we probably dont want this
            setTimeout(function () { $($($event.currentTarget)[0].parentNode).find('input')[0].focus(); }, 50);
        }
    }
}
