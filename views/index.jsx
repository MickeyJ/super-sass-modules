import React, { Component } from 'react'
import DefaultLayout from './layout'

import Boxes from './components/Boxes'

export default class Index extends Component {
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <h3>{this.props.title}</h3>

        <Boxes count={8} color={'green'}/>
        
      </DefaultLayout>
    )
  }
}
