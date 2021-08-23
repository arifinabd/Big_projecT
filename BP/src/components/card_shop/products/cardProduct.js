import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { useEffect } from 'react'
import "./style.scss"
// import { getProducts } from '../../store/action/product'
// import { addToCart } from '../../store/action/product'

const CardProduct = (props) => {
    // useEffect(() => {
    //     props.getProducts()
    // }, [])
    // console.log(props)

    // const handleAddToCart = (id) => {
    //     props.addToCart(id)
    //     alert('add to cart')
    // }

    return (
        <div className="cardproduct">
        <div className="content">
            <Link to={`/productPage/${props.product.id}`}>
            <img className="picproduct" src={props.product.image}></img>
            </Link>
            <div>
                <Link to={`/productPage/${props.product.id}`} style={{color: 'black',textDecoration: 'none'}}>
                <div>
                    <strong style={{fontSize:'30px'}}>{props.product.name}</strong>
                </div>
                </Link>               
            </div>
            <div>
                <div className="h3">${props.product.priceDisc}</div>
                <div className="h5" style={{textDecoration: 'line-through'}}>${props.product.priceReal}</div>
                <div className="h5">Stock : {props.product.stock}</div>
            </div>
        </div>
        </div>
    )
}


export default CardProduct
