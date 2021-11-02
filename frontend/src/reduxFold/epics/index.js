import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError  } from 'rxjs/operators';
import { serviceFetchError, serviceFetchSuccess } from './../action/actionCreators';

export const epicsFetchList = action$ => action$.pipe(
    ofType('FETCH_REQUEST'),
    map( o => {
        console.log(o.payload.id);
        return o.payload.id;
    }),
    map( o => new URLSearchParams({ lastSeenId: o }) ),
    switchMap( o => ajax.getJSON(`${process.env.REACT_APP_CURRENT_URL}/api/news?${o}`).pipe(
        map( o => serviceFetchSuccess(o)),
        catchError( o => of(serviceFetchError(o))),
        )
    )
)

export const initEpicsFetchList = action$ => action$.pipe(
    ofType('INIT_FETCH_REQUEST'),
    switchMap( () => ajax.getJSON(`${process.env.REACT_APP_CURRENT_URL}/api/news`).pipe(
        map( o => serviceFetchSuccess(o)),
        catchError( o => of(serviceFetchError(o))),
        )
    )
)