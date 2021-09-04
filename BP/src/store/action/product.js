import { GET_PRODUCTS, ADD_TO_CART, GET_CARTS, DELETE_CART, ADD_QTY, REMOVE_QTY , BACKEND_URL, CREATE_PRODUCTS, UPLOAD_PRODUCTS} from "../constants";

import axios from "axios";

const USER_DATA = JSON.parse(localStorage.getItem('dataLogin'))
const ADMIN_DATA = JSON.parse(localStorage.getItem('dataAdmin')) 


export const getProducts = () => {
    return (dispatch) => {
    const request = axios.get(`${BACKEND_URL}/product`, {
        headers: {
            'Authorization' : `Bearer ${USER_DATA && USER_DATA.access_token}`
        }
    })
        request.then(response => dispatch({
            type: GET_PRODUCTS,
            payload: response.data.data
            }))
    }
}  

export const createProduct = (data) => {
    console.log(ADMIN_DATA)
    return (dispatch) => {
        const request = axios.post(`${BACKEND_URL}/product`, data , {
            headers: {
                'Authorization' : `Bearer ${ADMIN_DATA && ADMIN_DATA.access_token}`
            }
        })
        request.then(response => {
            dispatch({
                type: CREATE_PRODUCTS,
                payload: response.data.data
            })
        })
    }
}

export const uploadProduct = async (formUpload) => {
    
    // console.log(e.target)
   console.log(ADMIN_DATA)
        const request = await axios.post(`${BACKEND_URL}/upload`, formUpload, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization' : `Bearer ${ADMIN_DATA && ADMIN_DATA.access_token}`
            }
        })
        
            return request.data.data
    
}

export const addToCart = (id) => {
    // ini mesti di ubah jadi jangan id aja tpi data post
    return (dispatch) => {
        const request = axios.post(`${BACKEND_URL}/cart`, {
            quantity: 1,
            product_id: id,
            user_id: USER_DATA && USER_DATA.user_id
        }, {
            headers: {
                'Authorization' : `Bearer ${USER_DATA && USER_DATA.access_token}`
            }
        })
        request.then(response => {
            dispatch({
                type: ADD_TO_CART,
                payload: response.data.data
            })
            dispatch(getCarts(USER_DATA.user_id))
            })
    }
//     return {
//       type: ADD_TO_CART,
//       payload: id
//   }
}

export const getCarts = (id) => {
    return (dispatch) => {
        const request = axios.get(`${BACKEND_URL}/cart/${id}`, {
            headers: {
                'Authorization' : `Bearer ${USER_DATA && USER_DATA.access_token}`
            }
        })
            request.then(response => dispatch({
                type: GET_CARTS,
                payload: response.data.data
                }))
        // return{
        //     type: GET_CARTS,
        // }
    }
}

export const deleteCart = (index) => {
    return (dispatch) => {
        const request = axios.delete(`${BACKEND_URL}/cart/${index}`, {
            headers: {
                'Authorization' : `Bearer ${USER_DATA && USER_DATA.access_token}`
            }
        })
        request.then(response => {
                dispatch({
                    type: DELETE_CART,
                    payload: response.data.data
                })
                dispatch(getCarts(USER_DATA.user_id))
            })
    }
    // return{
    //     type: DELETE_CART,
    //     payload:index
    // }
}

export const adjustQty = (data) => {
    return (dispatch) => {
        const request = axios.patch(`${BACKEND_URL}/cart/update/${data}`, {
            headers: {
                'Authorization' : `Bearer ${USER_DATA && USER_DATA.access_token}`
            }
        })
        request.then(response => {
                dispatch({
                    type: ADD_QTY,
                    payload: response.data.data
                })
                dispatch(getCarts(USER_DATA.user_id))
            })
    }
//     return {
//       type: ADD_QTY,
//       payload: data
//   }
}
