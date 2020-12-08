import {ofType} from 'redux-observable';
import {of} from "rxjs";
import {catchError, mapTo} from "rxjs/operators";
import {EpicType} from "static/enums";
import {pause} from "lib/operators";
import {pending, fulfilledAction, rejectedAction} from 'app/redux/helpers';
import {SystemConstants} from "app/redux/constants";
import {SystemReducerState} from "app/redux/states";

const {
    INITIALIZE_APPLICATION,
} = SystemConstants;

const initializeApp: EpicType<typeof SystemReducerState> = (action$) => action$.pipe(
    ofType(pending(INITIALIZE_APPLICATION)),
    pause(.75),
    mapTo(fulfilledAction(INITIALIZE_APPLICATION)),
    catchError((error) => of(rejectedAction(INITIALIZE_APPLICATION, error))),
);

export default [
    initializeApp,
];
