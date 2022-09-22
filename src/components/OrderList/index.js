import React, { Component } from 'react';
import OrderItem from '../OrderItem';
const data = {
  id: 1,
  shop: "sss",
  picture: "",
  product: "ssss",
  price: 19.1,
  ifCommented: true
}
class OrderList extends Component {
  render() {
    return (
      <div>
        <OrderItem data={data}/>
      </div>
    );
  }
}

export default OrderList;