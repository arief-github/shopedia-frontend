import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById, updateProduct } from '../../../action/productActions'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Error from '../../../components/Common/Error'
import Loading from '../../../components/Common/Loading'
import Success from '../../../components/Common/Success'

export default function EditProduct({ match }) {
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getProductByIdReducer);
  const updateproductstate = useSelector((state) => state.updateProductReducer);

  const { product, loading: productloading, error: producterrorr } = productstate;
  const { success, loading: updateloading, error: updateerror } = updateproductstate;

  const [value, setValue] = useState({
    name: "",
    price: "",
    countInStock: "",
    image: "",
    description: "",
    category: "",
  })

  useEffect(() => {
    if (!product || product._id !== match.params.productid) {
      dispatch(getProductById(match.params.productid));
    } else {
     setValue({
      name: product.name,
      price: product.price,
      countInStock: product.countInStock,
      image: product.image,
      description: product.description,
      category: product.category,
     })
    }
  }, [dispatch, match.params.productid, product]);

  const onChange = event => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedProduct = {
      name: value.name,
      price: value.price,
      description: value.description,
      countInStock: value.countInStock,
      category: value.category,
      image: value.image
    }
    dispatch(updateProduct(match.params.productid, updatedProduct))
  }

  return (
    <div>
      <h2>EditProduct</h2>
      { productloading || updateloading ? <Loading/> : null }
      { producterrorr || updateerror ? <Error error="Something went wrong"/> : null }
      { success ? <Success success="Product Updated Successfully"/> : null }
      { product ? (<>
          <Form onSubmit={handleUpdate}>
            <FormGroup>
              <Label>
                Name
              </Label>
              <Input name="name"  value={value.name} onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <Label>
                Price
              </Label>
              <Input name="price" value={value.price} onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <Label>
                Count In Stock
              </Label>
              <Input name="countInStock" value={value.countInStock} onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <Label>
                Image
              </Label>
              <Input name="image" value={value.image} onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <Label>
                Description
              </Label>
              <Input name="description" type='textarea' height="300" value={value.description} onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <Label>Category</Label>
              <Input name='category' type='select' value={value.category} onChange={onChange}>
                <option>Select The Category</option>
                <option value="technologies">Technologies</option>
                <option value="accessories">Acessories</option>
                <option value="fashion">Fashion</option>
              </Input>
            </FormGroup>
            <Button>
              Submit Cuy
            </Button>
          </Form>
      </>) : null }
    </div>
  )
}
