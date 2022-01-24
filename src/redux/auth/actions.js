import { login, register } from "../../api";
import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SET_ERROR, AUTH_CLEAR_ERROR } from "./types";

export function setAuthLoading() {
	return { type: AUTH_LOADING };
}

export function setAuthLogin(user) {
	return { type: AUTH_LOGIN, payload: user };
}

export function setAuthLogout() {
	return { type: AUTH_LOGOUT };
}

export function setAuthError(error) {
	return { type: AUTH_SET_ERROR, payload: error };
}

export function clearAuthError() {
	return { type: AUTH_CLEAR_ERROR };
}

export function sendLoginRequest({ params }) {
	return async (dispatch) => {
		dispatch(setAuthLoading);

		try {
			const user = await login({ params });

			dispatch(setAuthLogin(user));
		} catch (error) {
			dispatch(setAuthError(error));
		}
	};
}

export function sendRegisterRequest({ params }) {
	return async (dispatch) => {
		dispatch(setAuthLoading);

		try {
			const user = await register({ params });

			dispatch(setAuthLogin(user));
		} catch (error) {
			dispatch(setAuthError(error));
		}
	};
}
