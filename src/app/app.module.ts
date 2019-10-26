import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteauthorComponent } from './quoteauthor/quoteauthor.component';
import { HighlightDirective } from './highlight.directive';
import { DatesPipe } from './dates.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteauthorComponent,
    HighlightDirective,
    DatesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
