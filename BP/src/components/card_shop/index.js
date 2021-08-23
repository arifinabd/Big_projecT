import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { withRouter } from 'react-router'

import CardProduct from './products/cardProduct'
import "./style.scss"
import { getProducts, addToCart } from '../../store/action/product'

function CardShop(props) {
    useEffect(() => {
        props.getProducts()
    }, [])
    console.log(props)

    const handleAddToCart = (id) => {
        props.addToCart(id)
        alert('add to cart')
        props.history.push('/list-shop')
    }
    console.log(props.history)
    return (
        <div className="product">
                {props.products && props.products.map((val, key) => (
                    <div key={key} >
                     <CardProduct product={val}></CardProduct>
                     <button variant="secondary" size="sm" onClick={() => handleAddToCart(val.id)}>
                        ADD CART
                    </button>
                    </div>
                ))}
        </div>

    )
}
const mapStateToProps = (state) => {
    return{
        products: state.productReducer.products,
        carts: state.productReducer.carts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getProducts: () => dispatch(getProducts()),
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardShop))

       