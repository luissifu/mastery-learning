module ML.Models {
    export class Competence {
        id: number;
        description: string;
        parent: Competence;
        children: Competence[];
        edit: boolean;
        constructor(id: number, description: string, parent: Competence, children: Competence[], edit = false) {
            this.id = id;
            this.description = description;
            this.parent = parent;
            this.children = children;
            this.edit = edit;
        }
    }
}
