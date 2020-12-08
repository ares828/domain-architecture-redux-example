import {combineReducers} from 'redux';
import {SystemReducers} from "./reducers/system/system-reducers";

export const rootReducer = combineReducers({
    system: SystemReducers,
});
