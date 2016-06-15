import React, { Component, cloneElement } from 'react'

import Head from './common/Head'
import NavHeader from './common/NavHeader'
import Footer from './common/Footer'

const siteName = 'Sass Modules';

export default class Layout extends Component{
  render(){
    return(
      <html lang="en">
        <Head
          siteName={siteName}
          title={this.props.title}
          description={this.props.description}
        />
        <body>
          <div id="wrapper">
    
            <NavHeader siteName={siteName}/>
    
            <main id="main-content" className="">
              {this.props.children}
            </main>
    
            <Footer siteName={siteName}/>
    
          </div>
          <script src="js/script.js"></script>
        </body>
      </html>
    )
  }
}

