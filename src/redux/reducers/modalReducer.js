const SET_ACTIVE_MODAL = "SET_ACTIVE_MODAL";

let initialState = {
  isActive: false,
};


export const modalReducer = (state = initialState, action) => {

  let stateCopy = { ...state };


  if (action.type === SET_ACTIVE_MODAL) {
      stateCopy.isActive = action.data;
      return stateCopy;
  }

  return stateCopy;
};

export let setActiveModal= (data) => {
  return {
    type: SET_ACTIVE_MODAL,
    data: data,
  };
}
