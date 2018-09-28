import { Component } from '@angular/core';
import * as fromRoot from './reducers';
import * as cards from './actions/cards';
import { Observable } from 'rxjs';
import { Card } from './models/card';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public cards$: Observable<Card[]>;
  public cards: Array<any> = [
    {text: 'Card 1'},
    {text: 'Card 2'},
    {text: 'Card 3'},
    {text: 'Card 4'},
    {text: 'Card 5'},
    {text: 'Card 6'},
    {text: 'Card 7'},
    {text: 'Card 8'},
    {text: 'Card 9'},
    {text: 'Card 10'},
  ];

  // addCard(cardText: string) {
  //   this.cards.push({text: cardText});
  // }

  addCard(card: Card) {
    // this.store.dispatch(new cards.AddCard(card));
  }

  constructor(private store: Store<fromRoot.State>) {
    this.cards$ = this.store.select(fromRoot.getCards);
  }
}
