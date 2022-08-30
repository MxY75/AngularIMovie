export class Cast{
    public id : number;
    public name: string;
    public tmdbUrl :string;
    public gender : string;
    public profilePath :string;

 constructor(id : number, name :string,  tmdbUrl :string, gender:string, profilePath:string){
    this.id = id;
    this.name = name;
    this.tmdbUrl = tmdbUrl;
    this.gender = gender;
    this.profilePath = profilePath;
 }
}