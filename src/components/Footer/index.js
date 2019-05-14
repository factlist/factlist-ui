import React from 'react'
import cm from './footer.module.css'


const Footer = () =>
  <div className={cm.footer}>
    <ul>
      <li><a href="/">About</a></li>
      <li><a href="/">Help</a></li>
      <li><a href="/">Terms and Conditions</a></li>
      <li><a href="/">Privacy</a></li>
      <li><a href="/">Contact</a></li>
      <li><a href="/">Feedback</a></li>
    </ul>

    <label>Factlist 2018</label>
  </div>

export default Footer
