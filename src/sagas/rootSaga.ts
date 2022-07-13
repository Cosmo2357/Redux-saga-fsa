import {takeLatest }  from 'redux-saga/effects';
//import { requestGetUser } from '../requests/user';
import { handleGetUser,  } from './handlers/user';

export function* watcherSaga() {
 yield takeLatest('SAGA_CHANGE_MESSAGE', handleGetUser);
 //watch 'SAGA_CHANGE_MESSAGE' and call handleGetUser
/* 
    yield takeLatest('SAGA_INCREMENT', handleIncrement);
    yield takeLatest('SAGA_DECREMENT', handleDecrement); */
}