import {actionCreatorFactory } from 'typescript-fsa';
//import { reducerWithInitialState } from 'typescript-fsa-reducers';

const actionCreator = actionCreatorFactory();

 export const fsaActions = {

logout : actionCreator< boolean >('LOGOUT'),
setFsaMessage : actionCreator< string >('SET_FSA_MESSAGE'),
};

//export default fsaActions;