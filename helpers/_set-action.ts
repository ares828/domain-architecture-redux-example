import {ActionType} from "static/enums";

export default (type: string, payload?: any): ActionType => {
    return {type, payload}
};
