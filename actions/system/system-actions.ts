import {createAction} from "app/redux/helpers";
import {SystemConstants} from "app/redux/constants";
import {pending} from 'app/redux/helpers';

const {
    INITIALIZE_APPLICATION,
} = SystemConstants;

export default {
    initializeApplication: () => createAction(pending(INITIALIZE_APPLICATION)),
};
