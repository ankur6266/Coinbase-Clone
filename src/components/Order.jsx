import React, { Component } from 'react'
import './order.css'    // importing css styleshit for this component
import usd from './usd.JPG'
export default class Order extends Component {
  render() {
    return (
      <div className='order'>
      <div className='line_2'>  
            <img className='usd_img' src={usd} alt="alt for usd logo"/>

              <h4>ADA-USD </h4>
          </div>
        <h3>Start Trading Cardano</h3>
        <button className='order_getstarted'>Get Started</button>
        <div className='order_option'>
            <div>Order From</div>
            <span className='btns'>
                <button className='btn_buy'>BUY</button>
                <button className='btn_sell'>SELL</button>
            </span>
            <ul>
                <li>MARKET</li>
                <li>LIMIT</li>
                <li>STOP</li>
            </ul>
            <div className='fee-total'>
                <span className='fee-total-left'>Fee = </span>
                <span className='fee-total-right'>N/A USD </span>
            </div>
            <div className='fee-total'>
                <span className='fee-total-left'>Total = </span>
                <span className='fee-total-right'>N/A ADA </span>
            </div>
        </div>
      </div>
    )
  }
}
