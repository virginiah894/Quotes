import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1,"Be inspired before you expire","Pepe Minambo"),
    new Quote(2, "We are what we believe we are!","Maya Angelou"),
    new Quote (3,"Change your thoughts and you change your world","Nelson Mandela"),
    new Quote(4,"If opportunity doesn't knock, build a door","Kakuzi Bunuzi"),
    ];


    toggleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }

    
  upVote(isVoted,index){
    if (isVoted){
      this.quotes.splice(index,1);
    }
  }
 
  constructor() { }

  ngOnInit() {
  }

}


