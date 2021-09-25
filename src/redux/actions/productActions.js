import { ActionTypes } from "../contants/action-type";

export const setProduct = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};
export const selectedProduct = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product,
	};
};
export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	};
};
