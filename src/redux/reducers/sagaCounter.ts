interface StateType {
  sagaMessage?: string;
}

const initialState: StateType = {
  sagaMessage: "This message is from saga!!",
};

const sagaCounterReducer = (state: StateType = initialState, action: any) => {
  switch (action.type) {
    //case "SAGA_CHANGE_MESSAGE":
    /*   let newState3 = { ...state };
      newState3.sagaMessage = action.sagaMessage;
      return newState3; */
    case "SET_SAGA_MESSAGE":
        let newState3 = { ...state };
        console.log(action.sagaMessage);
        newState3.sagaMessage = action.sagaMessage;
        return newState3;
       // return { ...state, sagaMessage: action.sagaMessage };

    default:
      return state;
  }
};
export default sagaCounterReducer;
