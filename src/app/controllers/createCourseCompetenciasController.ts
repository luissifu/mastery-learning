module ML.Controllers {
    //Si quieres enviarle propiedades al scope definelas aqui, sino solo usa el tipo ng.IScope para el scope de tu controlador.
    export interface CreateCourseCompetenciasControllerScope extends ng.IScope {
        competence: Models.Competence;
        edit: ($event: Event, competence: Models.Competence) => void;
        newCompetence: ($event: Event) => void;
        change: ($event: KeyboardEvent, competence: Models.Competence) => void;
    }

    export class CreateCourseCompetenciasController {
        public static idS = 10;
        public scope: CreateCourseCompetenciasControllerScope;

        constructor($scope: CreateCourseCompetenciasControllerScope) {
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
            $scope.edit = this.edit;
            $scope.newCompetence = ($event: Event) => {
                competence.children.push(
                    new Models.Competence(
                        CreateCourseCompetenciasController.idS++,
                        'Hola, soy un hijo nuevo :3',
                        competence,
                        null
                    )
                );
            };
            $scope.change = ($event: KeyboardEvent, competence: Models.Competence) => {
                var tabKey = 9;
                var enterKey = 13;
                if ($event.keyCode === enterKey) {
                    competence.edit = false;
                }
                else if ($event.keyCode === tabKey) {
                    if ($event.preventDefault) {
                        $event.preventDefault();
                    }
                    if ($event.shiftKey) {
                        if (competence.parent && competence.parent.parent) {
                            var childs = competence.parent.parent.children;
                            var f = -1;
                            for (var i = 0, len = childs.length; i < len; i++) {
                                if (childs[i].id === competence.parent.id) {
                                    f = i;
                                    break;
                                }
                            }
                            if (f >= 0) {
                                var ch2 = competence.parent.children;
                                for (var j = 0, len = ch2.length; j < len; j++) {
                                    if (ch2[j].id === competence.id) {
                                        ch2.splice(j, 1);
                                        break;
                                    }
                                }
                                childs.splice(i + 1, 0, competence);
                                competence.parent = childs[i].parent;
                            }
                        }
                    }
                    else {
                        var childs = competence.parent.children;
                        var f = 0;
                        for (var i = 0, len = childs.length; i < len; i++) {
                            if (childs[i].id === competence.id) {
                                f = i - 1;
                                break;
                            }
                        }
                        if (f >= 0) {
                            childs.splice(f + 1, 1);
                            if (!childs[f].children) {
                                childs[f].children = [];
                            }
                            childs[f].children.push(competence);
                            competence.parent = childs[f];
                        }
                        //moveRight
                    }
                    setTimeout(function () { $(document).find('#' + competence.id)[0].focus(); }, 50);
                    //competence.edit = false;
                }
            };
            this.scope = $scope;
        }

        private edit($event: Event, competence: Models.Competence):void {
            competence.edit = true;
            //Super hack, we probably dont want this
            setTimeout(function () { $($($event.currentTarget)[0].parentNode).find('input')[0].focus(); }, 50);
        }
    }
}
