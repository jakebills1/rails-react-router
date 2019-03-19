import React from 'react';
import axios from 'axios';
import { Header, Card, Button,  } from 'semantic-ui-react';
import Product from './Product';
import { Link, } from 'react-router-dom'
class Products extends React.Component {
  state = { productList: [],};
  componentDidMount() {
    axios.get("/api/products")
      .then( res => {
        this.setState({ productList: res.data, })
      }
      )
      .catch( err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <Header as="h1">Products</Header>
        <br/>
        <Button as={Link} to="/products/new" color="blue">Add Product</Button>
        <br/>
        <br/>
        <Card.Group>
          {this.state.productList.length > 0 ? 
            this.state.productList.map( product => (
            <Product key={product.id} {...product}/>))
            :
            <Header>No products found</Header>
          }
        </Card.Group>
      </div>
    )
  }
}
export default Products;