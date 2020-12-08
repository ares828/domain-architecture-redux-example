import {ActionType, ReducerType} from "static/enums";

export default <T>(initialState: T, handlers: Record<string, ReducerType<T>>) => {
    return (state = initialState, action: ActionType) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
};
