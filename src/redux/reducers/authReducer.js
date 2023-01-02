const SET_ACTIVE_LOGIN_FORM = "SET_ACTIVE_LOGIN_FORM";
const SET_NOACTIVE_LOGIN_FORM = "SET_NOACTIVE_LOGIN_FORM";
const SET_EVENT_CLICK = "SET_EVENT_CLICK";
const SET_EVENT_NOT_CLICK = "SET_EVENT_NOT_CLICK";

let initialState = {
  isActive: false,
  isClick: null,
};


export const authReducer = (state = initialState, action) => {

  let stateCopy = { ...state };


  if (action.type === SET_ACTIVE_LOGIN_FORM) {
      stateCopy.isActive = action.data;
      return stateCopy;
  }

  if (action.type === SET_NOACTIVE_LOGIN_FORM) {
    stateCopy.isActive = false;
    return stateCopy;
}

if (action.type === SET_EVENT_CLICK) {
  stateCopy.isClick = true;
  return stateCopy;
}

if (action.type === SET_EVENT_NOT_CLICK) {
  stateCopy.isClick = false;
  return stateCopy;
}

  return stateCopy;
};

export let setActiveLogin = (data) => {
  return {
    type: SET_ACTIVE_LOGIN_FORM,
    data: data,
  };
}

  export let setNoActiveLogin = (data) => {
    return {
      type: SET_NOACTIVE_LOGIN_FORM,
      data: data,
    };
  };

  export let setEventClick = (data) => {
    return {
      type: SET_EVENT_CLICK,
      data: data,
    };
  }

  export let setEventNotClick = (data) => {
    return {
      type: SET_EVENT_NOT_CLICK,
      data: data,
    };
  }
