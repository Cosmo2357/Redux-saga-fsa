import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/user";
import { setSagaMessage } from "../../redux/actions";

export function* handleGetUser(action: { type: string; sagaMessage: string }) {
  try {
    //console.log(action.sagaMessage);
   
const sagaMessage: {message:string} = yield call(requestGetUser, action.sagaMessage);
const newMessage: string = sagaMessage.message + " from saga";
//console.log(sagaMessage);
 yield put(setSagaMessage(newMessage)); 
  } catch (e) {
    console.log(e);
  }
}
