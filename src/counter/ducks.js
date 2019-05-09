import { createAction, createReducer } from "redux-starter-kit";
import { put, takeEvery } from "redux-saga/effects";

const initialState = { count: 0 };

export const DECREMENT_COUNTER = '[counter] dec counter value';
export const INCREMENT_COUNTER = '[counter] inc counter value';
export const INCREMENT_COUNTER_ASYNC = '[counter] incAsync counter value';
export const DECREMENT_COUNTER_ASYNC = '[counter] decAsync counter value';

const INCREMENT = createAction(INCREMENT_COUNTER);
const DECREMENT = createAction(DECREMENT_COUNTER);

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const incrementCounter = (state) => {
    console.log('incrementCounter called');
    return { count: state.count + 1 }
}
const decrementCounter = (state) => {
    console.log('decrementCounter called');
    return { count: state.count > 0 ? state.count - 1 : 0 };
}

function* incrementAsync() {
    yield delay(1000);
    yield put({ type: INCREMENT_COUNTER })
}

function* decrementAsync() {
    console.log('decrementAsync called');
    yield delay(1000);
    yield put({ type: DECREMENT_COUNTER })
}


const counterReducer = createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter,
});

export function* rootSaga() {
    yield takeEvery(DECREMENT_COUNTER_ASYNC, decrementAsync);
    yield takeEvery(INCREMENT_COUNTER_ASYNC, incrementAsync);
}

export default counterReducer;