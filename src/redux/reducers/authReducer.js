const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

let initialState = {
  activeTab: "login",
  login: {},
  register: {},
};

export const authReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === SET_ACTIVE_TAB) {
    stateCopy.activeTab = action.data;
    return stateCopy;
  }

  return stateCopy;
};

export let setActiveTab = (data) => {
  return {
    type: SET_ACTIVE_TAB,
    data: data,
  };
};
