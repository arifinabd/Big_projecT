import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import './style.scss'
import Header from '../../components/header'
import Layout from '../../layouts/Layout'
import { deleteCart, adjustQty, getCarts, getProducts } from '../../store/action/product'
import { USER_DATA } from '../../store/constants' 

 const Cart = (props) => {
     console.log(props)
     const [render, setRender] = useState(true)

     useEffect(() => {
         console.log(render);
        //  setRender(false)
         props.getProducts(setRender(true))
         props.getCarts(USER_DATA.user_id)
     },[render])


     const handleCancel = (id) => {
        props.deleteCart(id)
     }
     const handleOnChange = () => {}

     const handleAddQty = (id, qty) => {
        // const data = {
        //     id: id,
        //     qty: qty + 1,
        // };
        props.adjustQty(id, qty);
        console.log(props);
        setRender(true);
        alert('berhasil nambah');
     }
     console.log(props)
     return (
         <div>
            <Layout>
            <Header/>

             <h1>CART LIST</h1>
             <div className="cartsummary">
                {props.carts && props.carts.length < 1 ? (
                    <h2>Cart Is Empty!</h2>
                    ): (
                        <table width="80%">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.carts && props.carts.map((val, key) => {
                                const subtotal = val.quantity * val.price_disc
                                return(
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{val.name}</td>
                                        <td>
                                            <button 
                                                variant="outline-light" 
                                                size='sm' 
                                                style={{fontWeight:'bold'}}> - </button>
                                            <input type="text" value={val.qty} onChange={() => {handleOnChange()}}/>
                                            <button
                                                onClick={() => {handleAddQty(val.id, val.qty)}} 
                                                variant="outline-light" 
                                                size='sm' 
                                                style={{fontWeight:'bold'}}> + </button>
                                        </td>
                                        <td>${val.price_disc}</td>
                                        <td>${subtotal}</td>
                                        <td><button onClick={() => {handleCancel(val.id)}}>X</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )} 
            </div>
            <div>
                <h2>Total : 200000</h2>
            <button>Checkout</button>
        </div>
        </Layout>
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
        getCarts: (id) => dispatch(getCarts(id)),
        deleteCart: (id) => dispatch(deleteCart(id)),
        adjustQty: (data) => dispatch(adjustQty(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
 