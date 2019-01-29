import {push} from 'react-router-redux';
import ApiClient from "../helpers/ApiClient";

const initialState = {
    token: null,
    loading: false,
    error: null,
    review: null,
    restaurant: null,
    categories: null,
    cuisines: null
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'APP_SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'PROCESS_SET_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'PROCESS_LOADING':
            return {
                ...state,
                loading: true,
                error: ''
            };
        case 'PROCESS_GET_REVIEW':
            return {
                ...state,
                loading: true,
                error: ''
            };
        default:
            return state;
    }
};

export const navigateTo = url => push(url);

export const login = (email, password) => {
    return async (dispatch) => {
                try {
                    dispatch({
                        type: 'PROCESS_LOADING',
                    });
                    const data = await ApiClient.post('/auth/login', {email, password});
                    dispatch({type: 'APP_SET_TOKEN', token: data.token});
                    ApiClient.setToken(token);
                } catch (e) {
                    dispatch({
                        type: 'PROCESS_ERROR',
                        error: e
                    })
                }
            }
};

export const register = (email, password, comfirmpassword) => {
    return async (dispatch) => {
                try {
                    dispatch({
                        type: 'PROCESS_LOADING',
                    });
                    await ApiClient.post('/auth/register', {email, password, comfirmpassword});
                } catch (e) {
                    dispatch({
                        type: 'PROCESS_ERROR',
                        error: e
                    })
                }
            }
};


export const getReview = () => {
    return async (dispatch) => {
                try {
                    dispatch({
                        type: 'PROCESS_LOADING',
                    });
                    const data = await ApiClient.get('/review');
                    dispatch({type: 'PROCESS_GET_REVIEW', review: data});
                } catch (e) {
                    dispatch({
                        type: 'PROCESS_ERROR',
                        error: e
                    })
                }
            }
};


export const postReview = (review) => {
    return async (dispatch) => {
                try {
                    dispatch({
                        type: 'PROCESS_LOADING',
                    });
                    await ApiClient.post('/review', {review});
                } catch (e) {
                    dispatch({
                        type: 'PROCESS_ERROR',
                        error: e
                    })
                }
            }
};


export const categories = () => {
    return async (dispatch) => {
                try {
                    dispatch({
                        type: 'PROCESS_LOADING',
                    });
                    const data = await ApiClient.get('/zomato/categories');
                    dispatch({type: 'PROCESS_CATEGORIES', categories: data.categories});
                } catch (e) {
                    dispatch({
                        type: 'PROCESS_ERROR',
                        error: e
                    })
                }
            }
};

export const cuisines = () => {
    return async (dispatch) => {
                try {
                    dispatch({
                        type: 'PROCESS_LOADING',
                    });
                    const data = await ApiClient.post('/zomato/cuisines');
                    dispatch({type: 'PROCESS_CUISINES', cuisines: data.cuisines});
                } catch (e) {
                    dispatch({
                        type: 'PROCESS_ERROR',
                        error: e
                    })
                }
            }
};


export const restaurant = (restaurant_id) => {
    return async (dispatch) => {
                try {
                    dispatch({
                        type: 'PROCESS_LOADING',
                    });
                    const data = await ApiClient.get('/zomato/restaurant', {restaurant_id});
                    dispatch({type: 'PROCESS_RESTAURANT', restaurant: data});
                } catch (e) {
                    dispatch({
                        type: 'PROCESS_ERROR',
                        error: e
                    })
                }
            }
};


// export const postReview = (review) => {
//     return async (dispatch) => {
//                 try {
//                     dispatch({
//                         type: 'PROCESS_LOADING',
//                     });
//                     const data = await ApiClient.post('/review', {review});
//                     dispatch({type: 'PROCESS_CATEGORIES', categories: data.categories});
//                 } catch (e) {
//                     dispatch({
//                         type: 'PROCESS_ERROR',
//                         error: e
//                     })
//                 }
//             }
// };


// export const postReview = (review) => {
//     return async (dispatch) => {
//                 try {
//                     dispatch({
//                         type: 'PROCESS_LOADING',
//                     });
//                     const data = await ApiClient.post('/review', {review});
//                     dispatch({type: 'PROCESS_CATEGORIES', categories: data.categories});
//                 } catch (e) {
//                     dispatch({
//                         type: 'PROCESS_ERROR',
//                         error: e
//                     })
//                 }
//             }
// };



