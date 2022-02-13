let initialState = {
  signup: [],
  login: [],
  google: [],
  reset: [],
  phone: [],
  storage: [],
  upload_Data: [],
};
let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, signup: action.payload };

    case "LOGIN":
      return { ...state, login: action.payload };

    case "PASSWORD":
      return { ...state, reset: action.payload };

    case "PROVIDER":
      return { ...state, google: action.payload };

    case "PHONE_AUTH":
      return { ...state, phone: action.payload };
    
    case "FOOD_STORAGE":
      return { ...state, storage: action.payload };
    
    case "uploadData":
      return { ...state, upload_Data: action.payload};

    default:
      return state;
  }
};
export default AuthReducer;
