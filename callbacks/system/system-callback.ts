import {ofType} from "redux-observable";
import {tap} from "rxjs/operators";
import {EpicType} from "static/enums";
import {SystemConstants} from "app/redux/constants";
import {fulfilled} from "app/redux/helpers";
import {RouterServices} from "app/modules/router/services";
import {endEpic} from "app/redux/operators";
import {Routes} from "app/routes";

const {
    INITIALIZE_APPLICATION,
} = SystemConstants;

const initializeAppCallback: EpicType = (action$) => action$.pipe(
    ofType(fulfilled(INITIALIZE_APPLICATION)),
        tap(() => RouterServices.next(Routes.System.entryLoading.path)),
    endEpic,
);

export default [
    initializeAppCallback,
];
