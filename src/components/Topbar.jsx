import React, { Component } from 'react'
import './topbar.css' // importing css styleshit for this component
export default class Topbar extends Component {
  render() {
    return (
      <div className='topbar'>
            <img className='topbar_icon' src='https://play-lh.googleusercontent.com/hi0SSeYyAbDcl1UTDVit1Or4noRiBwuNi-rAZ6QAEnGFQcZDZEIMKYkH5pbY5fn4SA' alt='coinbase icon'/>
            <span className='trade'>Trade</span>
            <ul>
                <li>Institution? Coinbase Exchange</li>
                <li>Login</li>
                <li><button>Get Started</button></li>
            </ul>
      </div>
    )
  }
}
