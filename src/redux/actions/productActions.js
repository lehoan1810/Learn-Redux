import { ActionTypes } from "../contants/action-type";

export const setProduct = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};
