module ML.Models {
    export class Reference {
        id: number;
        name: string;
        url: string;
        editName: boolean;
        editUrl: boolean;
        constructor(id: number, name: string, url: string, editName = false, editUrl = false) {
            this.id = id;
            this.name = name;
            this.url = url;
            this.editName = editName;
            this.editUrl = editUrl;
        }
    }
}
