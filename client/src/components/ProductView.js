import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import axios from 'axios';
class ProductView extends React.Component  {
  state = { product: {}, }
  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`)
      .then(
        res => {
          this.setState({ product: res.data, })
        }
      )
  }
  render() {
    const { name, department, price, description, } = this.state.product
    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h3">{department}</Header>
          <Header as="h5">${price}</Header>
          <p>{description}</p>
        </Segment>
        <br/>
        <br/>
        <Button color="black" onClick={this.props.history.goBack}>Back</Button>
      </div>
    )
  }
}
export default ProductView;