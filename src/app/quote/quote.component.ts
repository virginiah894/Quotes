import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    {id:1,name: "Be inspired before you expire",author:"Pepe Minambo"},
    {id:2,name :"We are what we believe we are!",author:"Maya Angelou"},
    {id:3,name:"Change your thoughts and you change your world",author:"Nelson Mandela"},
    {id:4,name: "If opportunity doesn't knock, build a door",author:"Kakuzi Bunuzi"},
    ];
 toggleDetails (index){
   this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
 }
 quoteVoted( isVoted, index){
   if (isVoted){
     this.quotes.splice(index,1);
   }
 }
  constructor() { }

  ngOnInit() {
  }

}
