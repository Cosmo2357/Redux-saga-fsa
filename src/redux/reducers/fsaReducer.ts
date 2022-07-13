import { reducerWithInitialState } from 'typescript-fsa-reducers';
import  {fsaActions}  from '../actions/fsaAction';

interface StateType {
    logout: boolean;
    fsaMessage: string;
}
const initialState: StateType ={
    logout: false,
    fsaMessage: "This message is from fsa!!",
}

export const fsaReducer = reducerWithInitialState(initialState)
.case( fsaActions.logout , (state , payload) =>  {
    return {...state, logout: payload}
}
)
.case( fsaActions.setFsaMessage , (state , payload) =>  {
    return {...state, fsaMessage: payload + 'FSA'}
/*     const newState = {...state};
    newState.fsaMessage = payload;
    return newState; */

}
)

