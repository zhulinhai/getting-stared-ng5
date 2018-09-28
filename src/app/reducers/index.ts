import * as fromCards from './cards';
import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, State} from '@ngrx/store';
import {storeLogger} from 'ngrx-store-logger';
import {environment} from '../../environments/environment';

export interface State {
    cards: fromCards.State;
}

// export const reducers: ActionReducerMap<State> = {
//     cards: fromCards.reducer
// }


