import * as cards from '../actions/cards';
import { Card } from '../models/card';

export interface State {
    cards: Array<Card>;
}

const initialState: State = {
    cards: []
};

export function reducer(state = initialState, action: cards.Actions): State {
    switch (action.type) {
        case cards.ADD:
        return {
            ...state,
            cards: [...state.cards, action.payload]
        };
        case cards.REMOVE:
        const index = state.cards.map((card) => card.$key).indexOf(action.payload);
        return {
            ...state,
            cards: [...state.cards.slice(0, index), ...state.cards.slice(index + 1)]
        };
        default:
        return state;
    }
}

