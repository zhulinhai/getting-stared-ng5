import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { Card } from '../models/card';


@Injectable()
export class CardService {

  private basePath = '/items';

  cardsRef: AngularFireList<Card>;
  cardRef:  AngularFireObject<Card>;

  constructor(private db: AngularFireDatabase) {
    this.cardsRef = db.list('/cards');
  }

  getCardsList(): Observable<Card[]> {
    return (this.cardsRef.snapshotChanges() as any).map((arr) => {
      return arr.map((snap) => Object.assign(snap.payload.val(), { $key: snap.key }) );
    });
  }

  getCard(key: string): Observable<Card | null> {
    const cardPath = `${this.basePath}/${key}`;
    const card = this.db.object(cardPath).valueChanges() as Observable<Card | null>;
    return card;
  }

  createCard(card: Card): void {
    this.cardsRef.push(card);
  }

  updateCard(key: string, value: any): void {
    this.cardsRef.update(key, value);
  }

  deleteCard(key: string): void {
    this.cardsRef.remove(key);
  }

  deleteAll(): void {
    this.cardsRef.remove();
  }

  // Default error handling for all actions
  private handleError(error: Error) {
    console.error(error);
  }

}
