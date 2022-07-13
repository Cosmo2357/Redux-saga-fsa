interface StateType {
    message?: string;
    count: number;
}

const initialState: StateType = {
    count: 100,
    message: 'Normal Redux Value'
}

const counterReducer = (state: StateType  = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
           // let newState: any = { ...state };
            //newState.count = newState.count + 7;
            //return newState;
            return { ...state, count: state.count + 7 };
        case 'DECREMENT':
            let newState2 = { ...state };
            newState2.count = newState2.count - 7;
            return newState2;
        default:
          return state

        case 'CHANGE_MESSAGE':
          /*   let newState3 = { ...state };
            newState3.message = action.message;
            return newState3; */
            return { ...state, message: 'Normal Redux Message: ' + action.message  };
            
    }
    }
    export default counterReducer;