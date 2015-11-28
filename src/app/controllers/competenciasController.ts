module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CompetenciasControllerScope extends ng.IScope {
        competence: Models.Competence;
    }

    export class CompetenciasController {

        public scope: CompetenciasControllerScope;

        constructor($scope: CompetenciasControllerScope) {
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
            this.scope = $scope;
        }
    }
}
