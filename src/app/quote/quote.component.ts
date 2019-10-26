import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote =[
    {id:1,name: "Be inspired before you expire"},
    {id:2,name :"We are what we believe we are!"},
    {id:3,name:"Change your thoughts and you change your world"},
    {id:4,name: "If opportunity doesn't knock, build a door"},
    ];

  constructor() { }

  ngOnInit() {
  }

}
