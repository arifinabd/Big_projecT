import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import './style.scss'
import ShoppingCart from '../font_awsome/shopping-cart'
import Search from '../font_awsome/Search'
import { getProducts } from '../../store/action/product'
    
function Header(props) {
    const handleClickCart = () => {
        props.history.push("/cart")
    }
    const handleClickHome = () => {
        props.history.push("/")
    }
    const handleClickShop = () => {
        props.history.push("/list-shop")
    }


    return (
        <div className="container">
        <div className="header">
                <div className="title_halaman3"><a onClick={() => handleClickHome()}>Your Shop Name</a></div>
                <div className="nav">
                    <div className="nav2">
                        <form className="form">
                        <input type="text" placeholder="PRODUCT"/>
                        <a href="#"><Search/></a>
                        </form>
                    </div>
                    <div className="nav1">
                        <div style={{display: 'flex', flexDirection: 'row', padding:'10px'}}>
                        <div className="shopping">
                            <a onClick={() => handleClickCart()}>
                                <ShoppingCart/> | 
                                <span>{props.carts.length}</span>
                            </a>
                        </div>
                        </div>
                        <div className="go_back"><a onClick={() => handleClickShop()}>GO BACK</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        // products: state.productReducer.products,
        carts: state.productReducer.carts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getProducts: () => dispatch(getProducts()),
        // addToCart: (id) => dispatch(addToCart(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
// export default withRouter(Header)
