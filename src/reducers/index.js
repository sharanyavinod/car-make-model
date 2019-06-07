import * as Actions from "../constants/actions";

export const initialState = {
  error: "",
  carMakes: [],
  makeSelected: "",
  carModels: [],
  modelSelected: "",
  isSummaryAvailable: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.EMIT_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      })
    case Actions.SET_MAKE:
      return Object.assign({}, state, {
        carMakes: action.payload
      });
    case Actions.SAVE_MAKE:
      return Object.assign({}, state, {
        makeSelected: action.payload
      });
    case Actions.SET_MODEL:
      return Object.assign({}, state, {
        carModels: action.payload
      });
    case Actions.SAVE_MODEL:
      return Object.assign({}, state, {
          modelSelected: action.payload
        });
    case Actions.SHOW_SUMMARY:
      return Object.assign({}, state, {
        isSummaryAvailable: true
      })
    default:
      return state;
  }
};

export default dataReducer;
