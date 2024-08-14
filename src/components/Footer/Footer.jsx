import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
<div className='FooterPage'>
<footer className='d-flex align-items-center gap-5 justify-content-evenly '>
      <div>
        <Link  to="/Home">
          <img src="../../../public/assets/images/roayalogo.png" alt="roayaLogo" width={300} />
        </Link>
      </div>
<div className='rightsidefooter d-flex'>
<div className='footerContent'>
        <h4>Quick Links</h4>
        <div className=' footerLinks '>
          <Link className='link' to="/Home">Home</Link>
          <Link className='link' to="/Shop"> Shop</Link>
        </div>
      </div>
      <div className='footerContent'>
        <h4>Support</h4>
        <div className=' footerLinks '>
          <Link to="/Contact" className='link'> Contact us</Link>
          <Link className='link'> Order Track</Link>
          <Link className='link'> Guide</Link>
        </div>
      </div>
      <div className='footerContent'>
        <h4>Policies</h4>
        <div className=' footerLinks '>
          <Link className='link'> Terms of Use</Link>
          <Link className='link'> Privacy Policy</Link>
          <Link  className='link'> Refund Policy</Link>
        </div>
      </div>
</div>

    </footer>

    <div className='footer'>
   <p>@Copyright 2024, Powered By Developer</p>
</div>

</div>
  )
}

export default Footer
