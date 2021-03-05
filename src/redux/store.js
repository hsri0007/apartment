import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer, userCreateAdminReducer } from "./user/userReducer";
import { createApartmentReducer } from "./apartment/apartmentReducer";
import { createComplaintsReducer } from "./complaints/complaintsReducer";
import { createStructureApartmentReducer } from "./structureApartment/structureReducer";
import { sellingReducer } from "./sellingFlat/sellingReducer";

const reducer = combineReducers({
  user: userReducer,
  register: userCreateAdminReducer,
  apartment: createApartmentReducer,
  complaints: createComplaintsReducer,
  structureApartment: createStructureApartmentReducer,
  sellingFlat: sellingReducer,
});

const middleware = [thunk];

const UserInfoFromStorage = localStorage.getItem("saveDatas")
  ? JSON.parse(localStorage.getItem("saveDatas"))
  : null;

const initilaState = {
  user: { userInfo: UserInfoFromStorage },
};

const store = createStore(
  reducer,
  initilaState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
