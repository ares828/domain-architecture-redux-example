import {combineEpics} from "redux-observable";
import SystemEpics from "./system/system-epics";
import appCallbacks from "../callbacks/system/system-callback";
import {EpicType} from "../../../static/enums";

const epicCallbacks: EpicType[] = [
        ...appCallbacks,
];

export const rootEpics = combineEpics(
    ...epicCallbacks,
    ...SystemEpics,
);
