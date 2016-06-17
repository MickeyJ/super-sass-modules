import React, { Component } from 'react'
import DefaultLayout from './layout'

import Boxes from './components/Boxes'

export default class Index extends Component {
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        
        <Boxes count={8} color={'green'}/>
        
      </DefaultLayout>
    )
  }
}
