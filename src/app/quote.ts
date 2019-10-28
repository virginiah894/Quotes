export class Quote {
  showAuthor:boolean;
  constructor(public id:number,public name:string,public author:string,public datePublished:Date,public submitter:string){
    this.showAuthor=false;
  }
}

