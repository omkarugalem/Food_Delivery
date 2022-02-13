import firebase from "../../firebase";
import { toast } from "react-toastify";
import { Callbacks } from "jquery";

export let Signup = (email, password) => {
  return async dispatch => {
    let userData = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    userData.user.sendEmailVerification();
    dispatch({
      type: "SIGN_UP",
      payload: userData,
    });
  };
};

export let Login1 = (email, password) => {
  return async dispatch => {
    let loginData = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (loginData.user.emailVerified === true) {
      toast.success(`successfully ${email} verified`);
      window.location.assign("/");
    } else {
      window.location.assign("/login");
      toast.error("Invalid Login Credintial");
    }
    dispatch({
      type: "LOGIN",
      payload: loginData,
    });
  };
};

export let ResetPassword = email => {
  return async dispatch => {
    let resetData = await firebase.auth().sendPasswordResetEmail(email);
    dispatch({
      type: "PASSWORD",
      payload: resetData,
    });
  };
};
export let GoogleProvider = new firebase.auth.GoogleAuthProvider();
export let SocialLogin = provider => {
  return async dispatch => {
    let gprovider = await firebase.auth().signInWithPopup(provider);
    toast.success("successfully logged in");
    dispatch({
      type: "PROVIDER",
      payload: gprovider,
    });
  };
};

export let UserPhoneAuth = phone => {
  return async dispatch => {
    let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );

    let PhoneAuth = await firebase
      .auth()
      .signInWithPhoneNumber(phone, recaptchaContainer);
    let code = window.prompt("enter otp");
    PhoneAuth.confirm(code);
    dispatch({
      type: "PHONE_AUTH",
      payload: PhoneAuth,
    });
  };
};

export let RestaurantStorage = (Poster, state) => {
  return async dispatch => {
    let foodPoster = Poster.food_poster.name;
    let foodStorage = firebase
      .storage()
      .ref(`/food-poster/${foodPoster}`)
      .put(Poster.food_poster);

    // real database
    foodStorage.on(
      "STATE_CHANGED",
      snapshot => {},
      err => {
        throw err;
      },
      async () => {
        let Download_poster = await firebase
          .storage()
          .ref("food-poster")
          .child(foodPoster)
          .getDownloadURL();
        firebase
          .database()
          .ref("food-description")
          .push({ ...state, Download_poster });
      }
    );
    dispatch({
      type: "FOOD_STORAGE",
      payload: foodStorage,
    });
  };
};

export let fetchFood = () => {
  return async dispatch => {
    let foodList = firebase.database().ref("food-description");
    foodList.on("value", callback => {
      let foodDescription = [];
      callback.forEach(x => {
        let { Download_poster,Menu_title, Price, food_category, food_details,restaurant_title } = x.val();

        foodDescription.push({
          id: x.key,
          Menu_title: Menu_title,
          Details: food_details,
          price: Price,
          food_category: food_category,
          poster: Download_poster,
          title:restaurant_title,
          
          
        });
        dispatch({
          type: "uploadData",
          payload: foodDescription,
        });
      });
    });
  };
};
