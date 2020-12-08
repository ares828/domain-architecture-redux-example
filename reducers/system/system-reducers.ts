import {ReducerType} from "static/enums";
import {updateState, createReducer, pending, fulfilled, rejected} from "app/redux/helpers";
import {SystemConstants} from "app/redux/constants";
import {SystemReducerState} from "app/redux/states";

const {
    INITIALIZE_APPLICATION,
} = SystemConstants;

const initializeAppPending: ReducerType<typeof SystemReducerState> = (state) => updateState(state, {
    inProgress: {$set: true},
    error: {$set: null},
});

const initializeAppFulfilled: ReducerType<typeof SystemReducerState> = (state) => updateState(state, {
    initialized: {$set: true},
    inProgress: {$set: false},
});

const initializeAppRejected: ReducerType<typeof SystemReducerState> = (state, action) => updateState(state, {
    error: {$set: action.payload},
    inProgress: {$set: true},
});

export const SystemReducers = createReducer<typeof SystemReducerState>(SystemReducerState, {
    [pending(INITIALIZE_APPLICATION)]: initializeAppPending,
    [fulfilled(INITIALIZE_APPLICATION)]: initializeAppFulfilled,
    [rejected(INITIALIZE_APPLICATION)]: initializeAppRejected,
});
