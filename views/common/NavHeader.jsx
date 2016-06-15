import React from 'react'

const NavHeader = (props) =>(
  <section id="nav-header">
    
    <nav id="nav">
      <a href="/" className="nav-link">Home</a>
      <span>|</span>
      <a href="/contact" className="nav-link">Contact</a>
    </nav>

    <header className="logo-banner blue">
      {props.siteName}
    </header>
    
  </section>
);

export default NavHeader;