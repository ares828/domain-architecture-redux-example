import UpdateState from './_update-state';
import CreateAction from './_create-action';
import CreateReducer from './_create-reducer';
import PromiseStates from './_promise-states';
import SetAction from './_set-action';

export const updateState = UpdateState;
export const createAction = CreateAction;
export const createReducer = CreateReducer;
export const pending = PromiseStates.pending;
export const fulfilled = PromiseStates.fulfilled;
export const rejected = PromiseStates.rejected;
export const setAction = SetAction;
export const fulfilledAction = (type: string, payload?: any) => SetAction(fulfilled(type), payload);
export const rejectedAction = (type: string, payload?: any) => SetAction(rejected(type), payload);
export const pendingAction = (type: string, payload?: any) => SetAction(pending(type), payload);
