import {Observable} from "rxjs";
import {ignoreElements} from "rxjs/operators";

const endEpic = <T>(source: Observable<T>): Observable<T> => {
    return source.pipe(ignoreElements());
};

export default endEpic;
