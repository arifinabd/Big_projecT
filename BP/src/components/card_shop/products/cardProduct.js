import React from 'react'
import { Link } from 'react-router-dom'

import "./style.scss"


const CardProduct = (props) => {

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
                <div className="h3">${props.product.price_disc}</div>
                <div className="h5" style={{textDecoration: 'line-through'}}>${props.product.price}</div>
                <div className="h5">Stock : {props.product.stock}</div>
            </div>
        </div>
        </div>
    )
}


export default CardProduct
