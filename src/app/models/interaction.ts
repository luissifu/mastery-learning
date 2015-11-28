module ML.Models {
    export class Interaction {
        id: number;
        name: string;
        description: string;
        editName: boolean;
        editDescription: boolean;
        constructor(id: number, name: string, description: string, editName = false, editDescription = false) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.editName = editName;
            this.editDescription = editDescription;
        }
    }
}
