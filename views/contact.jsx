import React, { Component } from 'react'
import DefaultLayout from './layout'

import Info from './components/Info'

function makeBoxes(count, arr){
  for(let i=0; i < count; i++) arr[i] = i + 1;
  return arr.map(x => <div key={x} className="grid-box">{x}</div>)
}

export default class Contact extends Component {
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <h1>{this.props.title}</h1>

        <button className="button blue" data-color="blue">
          Blue Click
        </button>
        <button className="button red" data-color="red">
          Red Click
        </button>
        <button className="button green" data-color="green">
          Green Click
        </button>

        <section id="grid" className="cell-1600-10 cell-950-4 cell-500-2 cell-380-1">
          {makeBoxes(40, [])}
        </section>

        <Info />
        <div className="content-banner red">Nice</div>
        <Info />
        <div className="content-banner blue">Banners</div>
        <Info />

      </DefaultLayout>
    )
  }
}
