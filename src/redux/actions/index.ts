export const increment = () => {
  return {
    type: "INCREMENT",
    info: "This will increment the counter",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const login = () => {
  return {
    type: "LOGIN",
  };
};
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
export const changeMessage = (message: string) => {
  return {
    type: "CHANGE_MESSAGE",
    message,
  };
};

export const sagaChangeMessage = (sagaMessage: string) => {
  return {
    type: "SAGA_CHANGE_MESSAGE",
    sagaMessage,
  };
};

export const setSagaMessage = (sagaMessage: string) => {
  return {
    type: "SET_SAGA_MESSAGE",
    sagaMessage,
  };
};
