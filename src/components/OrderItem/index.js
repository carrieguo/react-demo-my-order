import React, { Component } from 'react'
import './style.css'

class OrderItem extends Component {
  render() {
    const {shop, product, price, picture, ifCommented} = this.props.data;
    return (
      <div className='orderItem'>
        <div className='orderItem__picContainer'>
          <img className='orderItem__pic' src={picture} />
        </div>
        <div className='orderItem__content'>
          <div className='orderItem__product'>{product}</div>
          <div className='orderItem__shop'>{shop}</div>
          <div className='orderItem__detail'>
            <div className='orderItem__price'>{price}</div>
            <div>
              {
                ifCommented ? (
                <button className='orderItem__btn orderItem__btn--grey'>评价</button>
                ) : (
                <button className='orderItem__btn orderItem__btn--red'>评价</button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderItem
