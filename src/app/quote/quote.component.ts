import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1,"Be inspired before you expire","Pepe Minambo",new Date(2000,10,26),"Quicy Aden",0,0),
    new Quote(2, "We are what we believe we are!","Maya Angelou",new Date(1999,0,20),"Paul Tergat",0,0),
    new Quote (3,"Change your thoughts and you change your world","Nelson Mandela",new Date(2010,12,19),"Victor Duda",0,0),
    new Quote(4,"If opportunity doesn't knock, build a door","Kakuzi Bunuzi",new Date(1890,2,17),"Dionysious Kandusi",0,0),
    ];


    toggleDetails(index){
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }

    
  upVote(index){
      this.quotes[index].upvote ++;
    }
    downVote(index){
      this.quotes[index].downvote ++;
    }
    get topVotes(){
      return this.quotes.sort((x,y) =>{
        return <any>new Date (y.upvote)-<any>new Date (x.upvote);
      });
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
   
  
  let quoteLength= this.quotes.length;
  quote.id = quoteLength+1;
  quote.datePublished = new Date(quote.datePublished)
  this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }
}