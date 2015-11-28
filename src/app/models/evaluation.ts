module ML.Models {
    export class Evaluation {
        id: number;
        name: string;
        file: string;
        editName: boolean;
        editFile: boolean;
        constructor(id: number, name: string, file: string, editName = false, editFile = false) {
            this.id = id;
            this.name = name;
            this.file = file;
            this.editName = editName;
            this.editFile = editFile;
        }
    }
}
