module ML.Models {
    export class Level {
        id: number;
        description: string;
        edit: boolean;
        constructor(id: number, description: string, edit = false) {
            this.id = id;
            this.description = description;
            this.edit = edit;
        }
    }
}
