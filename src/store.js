// import { createStore } from "redux";

// const initialState = {
//   sidebarShow: true,
// };

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case "set":
//       return { ...state, ...rest };
//     default:
//       return state;
//   }
// };

// const store = createStore(changeState);
// export default store;
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./redux/reducer/index";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
