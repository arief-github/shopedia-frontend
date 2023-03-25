import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { addProduct } from '../../../action/productActions'
import Error from '../../../components/Common/Error'
import Loading from '../../../components/Common/Loading'
import Success from '../../../components/Common/Success'

export default function CreateProduct() {
  const [value, setValue] = useState({
    name: "",
    price: "",
    countInStock: "",
    image: "",
    description: "",
    category: "",
  })

  const dispatch = useDispatch();
  const addproductstate = useSelector(state => state.addProductReducer)

  const { success, loading, error } = addproductstate;

  const onChange = event => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    const product = {
      name: value.name,
      price: value.price,
      countInStock: value.countInStock,
      image: value.image,
      description: value.description,
      category: value.category,
    };

    dispatch(addProduct(product));
    
    setValue({
      name: '',
      price: '',
      countInStock: '',
      image: '',
      description: '',
      category: '',
    });
  }

  return (
    <>
      { success ? <Success success="Product added succesfully"/> : null }
      { loading ? <Loading/> : null }
      { error ? <Error error={error}/> : null }
      <Form onSubmit={handleSubmit}>
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
    </>
  )
}
