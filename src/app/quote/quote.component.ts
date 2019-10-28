import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1,"Be inspired before you expire","Pepe Minambo",new Date(1982,10,26),"Quicy Aden"),
    new Quote(2, "We are what we believe we are!","Maya Angelou",new Date(1899,0,20),"Paul Tergat"),
    new Quote (3,"Change your thoughts and you change your world","Nelson Mandela",new Date(1970,12,19),"Victor Duda"),
    new Quote(4,"If opportunity doesn't knock, build a door","Kakuzi Bunuzi",new Date(2000,2,17),"Dionysious Kandusi"),
    ];


    toggleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }

    
  upVote(isVoted,index){
    if (isVoted){
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isVoted, index){
    if (isVoted) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
 addNewQuote(quote){
   
  
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.datePublished = new Date(quote.datePublished)
  this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }
}