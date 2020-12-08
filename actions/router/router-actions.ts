import {LocationStateType} from "static/enums";
import {createAction} from "app/redux/helpers";
import {RouterConstants} from "app/redux/constants";
import {RouterServices} from "app/modules/router/services";

export default {
    next: (path: string, state?: LocationStateType) => {
        const from = RouterServices.getCurrentLocation().pathname;

        return createAction(RouterConstants.NEXT, {
            to: path,
            from,
            with: state,
        });
    },
};
