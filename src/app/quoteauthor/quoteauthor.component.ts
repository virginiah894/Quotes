import { Component, OnInit,Input } from '@angular/core';
import { Quote } from "../quote"


@Component({
  selector: 'app-quoteauthor',
  templateUrl: './quoteauthor.component.html',
  styleUrls: ['./quoteauthor.component.css']
})
export class QuoteauthorComponent implements OnInit {
@Input() quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}
