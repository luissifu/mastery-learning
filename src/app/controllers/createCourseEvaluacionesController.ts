module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseEvaluacionesControllerScope extends ng.IScope {
        competence: Models.Competence;
        evaluations: Models.Evaluation[];
        editName: ($event: Event, Evaluation: Models.Evaluation) => void;
        changeName: ($event: KeyboardEvent, Evaluation: Models.Evaluation) => void;
        editFile: ($event: Event, Evaluation: Models.Evaluation) => void;
        changeFile: ($event: KeyboardEvent, Evaluation: Models.Evaluation) => void;
        newEvaluation: ($event: Event, Evaluation: Models.Evaluation) => void;
    }

    export class CreateCourseEvaluacionesController {
        public static idS = 10;

        public scope: CreateCourseEvaluacionesControllerScope;

        constructor($scope: CreateCourseEvaluacionesControllerScope) {
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
            $scope.evaluations = [];
            $scope.evaluations.push(new Models.Evaluation(5, "Primer examen parcial", "Mis Documentos"));
            $scope.evaluations.push(new Models.Evaluation(6, "Segundo examen parcial", "Mis Documentos"));
            $scope.evaluations.push(new Models.Evaluation(7, "Examen Final", "Mis Documentos"));
            $scope.editName = this.editName;
            $scope.editFile = this.editFile;
            $scope.newEvaluation = ($event: Event) => {
                $scope.evaluations.push(new Models.Evaluation(CreateCourseEvaluacionesController.idS++, "Name", "File link"));
            };
            $scope.changeName = ($event: KeyboardEvent, evaluation: Models.Evaluation) => {
                var enterKey = 13;
                if ($event.keyCode == enterKey) {
                    evaluation.editName = false;
                }
            }
            $scope.changeFile = ($event: KeyboardEvent, evaluation: Models.Evaluation) => {
                var enterKey = 13;
                if ($event.keyCode == enterKey) {
                    evaluation.editFile = false;
                }
            }
            this.scope = $scope;
        }

        private editName($event: Event, evaluation: Models.Evaluation): void {
            evaluation.editName = true;
            //Super hack, we probably dont want this
            setTimeout(function () { $($($event.currentTarget)[0].parentNode).find('input')[0].focus(); }, 50);
        }

        private editFile($event: Event, evaluation: Models.Evaluation): void {
            evaluation.editFile = true;
            //Super hack, we probably dont want this
            setTimeout(function () { $($($event.currentTarget)[0].parentNode).find('input')[0].focus(); }, 50);
        }
    }
}
