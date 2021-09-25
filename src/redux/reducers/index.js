import { combineReducers } from "redux";
import { productReducer, SelectedProductReducer } from "./productReducer";

const reducers = combineReducers({
	allProducts: productReducer,
	product: SelectedProductReducer,
});

export default reducers;
