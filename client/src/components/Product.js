import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
const Product = ({name, department, description, id}) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{department}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Button as={Link} to={`/products/${id}`} >
    View Product</Button>
  </Card>
)
export default Product;