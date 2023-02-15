export class Link{
    title!: String;
    link!:String;
    votes!:number;

    constructor(title:String, link:String,votes?:number){
        this.title=title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(){
        this.votes ++;
    }

    voteDown(){
        this.votes --;
    }
}