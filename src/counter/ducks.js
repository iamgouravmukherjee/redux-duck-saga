import { createAction, createReducer } from "redux-starter-kit";
import { put, takeEvery } from "redux-saga/effects";

const initialState = { count: 0 };

/* Actions for the counter component */
const INCREMENT_COUNTER = '[counter] inc counter value';
const DECREMENT_COUNTER = '[counter] dec counter value';
const INCREMENT_COUNTER_ASYNC = '[counter] incAsync counter value';
const DECREMENT_COUNTER_ASYNC = '[counter] decAsync counter value';

/* Action Creators for the counter component */
export const INCREMENT = createAction(INCREMENT_COUNTER, value => value);
export const DECREMENT = createAction(DECREMENT_COUNTER, value => value);
export const INCREMENT_ASYNC = createAction(INCREMENT_COUNTER_ASYNC, value => value);
export const DECREMENT_ASYNC = createAction(DECREMENT_COUNTER_ASYNC, value => value);

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const incrementCounter = (state, action) => {
    console.log('incrementCounter called');
    return { count: state.count + action.payload }
}
const decrementCounter = (state, action) => {
    console.log('decrementCounter called');
    return { count: state.count > 0 ? state.count - action.payload : 0 };
}

const counterReducer = createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter,
});

function* incrementAsync(action) {
    console.log('[increment async]');
    yield delay(1000);
    yield put({ type: INCREMENT_COUNTER, payload: action.payload })
}

function* decrementAsync(action) {
    console.log('[decrement Async]');
    yield delay(1000);
    yield put({ type: DECREMENT_COUNTER, payload: action.payload })
}

export function* rootSaga() {
    yield takeEvery(DECREMENT_COUNTER_ASYNC, decrementAsync);
    yield takeEvery(INCREMENT_COUNTER_ASYNC, incrementAsync);
}

export default counterReducer;