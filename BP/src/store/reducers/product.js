import { GET_PRODUCTS, ADD_TO_CART, GET_CARTS, DELETE_CART, ADD_QTY, CREATE_PRODUCTS, REMOVE_CART } from "../constants";

const initialState = {
  carts: [],
  products: [],
  product: {
    id: 0,
    type: '',
    name: '',
    caption: '',
    image: '',
    stock: '',
    real_stock: '',
    price: 0,
    price_disc: 0,
    description: '',
  }
};

const productReducer = (state = initialState, { type, payload }) => {
  const carts = state.carts

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    
    case CREATE_PRODUCTS:
      return {
        ...state,
        product: payload,
      };

    case ADD_TO_CART:
      const findProduct = state.products.find((val) => val.id === payload)
      carts.push({...findProduct, qty: 1,})
      return{
        ...state,
        carts: carts,
      }

    case GET_CARTS:
      return {
        ...state,
        carts: payload,
      }

    case DELETE_CART:
      const deleteProduct = [...state.carts];
      if (deleteProduct[payload] !== -1){
        deleteProduct.splice(payload, 1)
      }
      return{
        ...state,
        carts: deleteProduct
      }

    case ADD_QTY:
      const getProductById = state.products.find((val) => val.id === payload.id)
      getProductById.quantity = payload.quantity
      getProductById.stock = getProductById.real_stock - payload.quantity;
      return{
        ...state,
        carts: carts,
      }
    
    // case REMOVE_CART:
    //   const checkout = carts.
    //   if (deleteProduct[payload] !== -1){
    //     deleteProduct.splice(payload, 1)
    //   }
    //   return{
    //     ...state,
    //     carts: deleteProduct
    //   }

    default:
      return state;
  }
};

export default productReducer;