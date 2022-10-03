import React, { Component } from 'react';
import OrderItem from '../OrderItem';
// const data = [{
//   id: 1,
//   shop: "sss",
//   picture: "",
//   product: "ssss",
//   price: 19.1,
//   ifCommented: true
// },{
//   id: 2,
//   shop: "sss",
//   picture: "",
//   product: "ssss",
//   price: 19.1,
//   ifCommented: true
// }]
class OrderList extends Component {
  constructor(props){
    super(props)
    this.state = {data:[]}
  }
  componentDidMount(){
    fetch('/mock/order.json').then(res => {
      if(res.ok){
        res.json().then(data=>{
          this.setState({
            data
          })
        })
      }
    })
  }
  render() {
    return (
      <div>
        {
          this.state.data.map(item=>{
            return <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit}/>
          })
        }
        
      </div>
    );
  }

  handleSubmit = (id, comment,stars)=>{
    const newData = this.state.data.map(item=>{
      return item.id ===id ? 
      {
        ...item, comment, stars, ifCommented : true
      }: item;
    })

    this.setState({
      data : newData
    })
  }
}

export default OrderList;