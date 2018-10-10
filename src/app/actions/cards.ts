import { Action } from '@ngrx/store';

export const ADD = '[Cards] Add';
export const REMOVE = '[Cards] Remove';
export class AddCard implements Action {
    readonly type = ADD;
    constructor(public payload: any) {}
}

export class Remove implements Action {
    readonly type = REMOVE;
    constructor(public payload: any) {}
}

export  type Actions = AddCard | Remove;
