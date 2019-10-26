import { Component } from '@angular/core';
import { quote } from "./Quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quotes:Quote =[
{id:1,name "Be inspired before you expire"},
{id:2,name "We are what we believe we are!"},
{id:3,name "Change your thoughts and you change your world"},
{id:4,name "If opportunity doesn't knock, build a door."},
]
}