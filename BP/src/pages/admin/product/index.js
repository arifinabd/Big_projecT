import React, {useState} from 'react';
import { connect } from 'react-redux';

import LayoutAdmin from '../../../layouts/LayoutAdmin';
import { createProduct, uploadProduct } from '../../../store/action/product'

const AdminProduct = (props) => {
  const [product, setProduct] = useState({
    type: "",
    name: "",
    caption: "",
    image: "",
    stock: 0,
    real_stock: 0,
    price: 0,
    price_disc: 0,
    description: ""
  })
  const handleFromChange = (e) => {
    setProduct({
      ...product, [e.target.name] : e.target.value 
    })
    props.createProduct(e)
  }

  const handleUpload = (e) => {
    setProduct({
      'image': e.data.data
    })
    props.uploadProduct(e)
  }

  return (
    <LayoutAdmin>
      <h1>Admin Product</h1>
      <form>
        <label htmlFor=''>Upload Product</label>
          <div>
            <input type="text" placeholder="type..." name="type" value={product.type} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <input type="text" placeholder="name..." name="name" value={product.name} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <input type="text" placeholder="caption..." name="caption" value={product.caption} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <input type="file" name="image" value={product.image} onChange={(e) => handleUpload(e)}/>
          </div>
          <div>
            <input type="number" placeholder="stock..." name="stock" value={product.stock} onChange={(e) => handleFromChange(e)} />
          </div>
          <div>
            <input type="number" placeholder="stock real..." name="real_stock" value={product.real_stock} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <input type="number" placeholder="price..." name="price" value={product.price} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <input type="number" placeholder="disc price..." name="price_disc" value={product.price_disc} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <input type="text" placeholder="description..." name="description" value={product.description} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
          <button type='submit'>Create Product</button>
          </div>
      </form>
    </LayoutAdmin>
  )
}
const mapStateToProps = (state) => {
 return  null
}
const mapDispatchToProps = (dispatch) => {
 return{
     createProducts: () => dispatch(createProduct()),
     uploadProduct: () => dispatch(uploadProduct())
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct)