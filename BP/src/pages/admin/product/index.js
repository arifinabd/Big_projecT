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
  }

  const handleSetProduct = (e) => {
    e.preventDefault()
    try {
      props.createProducts(product)
      alert('berhasil ditambah')
    } catch (error) {
      alert(error)
    }
  }

  const handleUpload = async (e) => {
    const formUpload = new FormData()
    const imageFile = e.target.files[0]
    formUpload.append('image', imageFile)

    const imageResponse = await uploadProduct(formUpload)
    setProduct({
      ...product,
      image: imageResponse
    })
  }

  return (
    <LayoutAdmin>
      <h1>Admin Product</h1>
      <form onSubmit={(e) => handleSetProduct(e)}>
        <label htmlFor='' style={{fontWeight:'bold'}}>Upload Product</label>
          <div>
            <label htmlFor=''>Type</label><br/>
            <input type="text" placeholder="type..." name="type" value={product.type} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <label htmlFor=''>Name</label><br/>
            <input type="text" placeholder="name..." name="name" value={product.name} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <label htmlFor=''>Caption</label><br/>
            <input type="text" placeholder="caption..." name="caption" value={product.caption} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <label htmlFor=''>Image</label><br/>
            <input type="file" name="image" onChange={(e) => handleUpload(e)}/>
          </div>
          <div>
            <label htmlFor=''>Stock</label><br/>
            <input type="number" placeholder="stock..." name="stock" value={product.stock} onChange={(e) => handleFromChange(e)} />
          </div>
          <div>
            <label htmlFor=''>Stock real</label><br/>
            <input type="" placeholder="stock real..." name="real_stock" value={product.real_stock} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <label htmlFor=''>Price</label><br/>
            <input type="number" placeholder="price..." name="price" value={product.price} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <label htmlFor=''>Discount price</label><br/>
            <input type="number" placeholder="disc price..." name="price_disc" value={product.price_disc} onChange={(e) => handleFromChange(e)}/>
          </div>
          <div>
            <label htmlFor=''>Desription</label><br/>
            <input type="text" placeholder="description..." name="description" value={product.description} onChange={(e) => handleFromChange(e)}/>
          </div>
            <br/>
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
     createProducts: (data) => dispatch(createProduct(data)),
    //  uploadProduct: () => dispatch(uploadProduct())
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct)