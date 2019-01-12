import React, { Component } from 'react'
import './Fullpage.css'

export default class Fullpage extends Component {
  render() {
      const { children } = this.props
    return (
      <section className={`fullpage ${this.props.className || ''}`}>
        {children}
      </section>
    )
  }
}
