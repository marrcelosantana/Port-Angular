export class Network {
  public id: number;
  public name: string;
  public icon: string;
  public link: string;

  constructor(id: number, name: string, icon: string, link: string){
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.link = link;
  }
}
