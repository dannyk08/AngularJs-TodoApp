import React, { Component } from 'react'
import PropTypes from 'prop-types'

interface LabelPillComponentI {
  value: number,
  className: string[],
}

class LabelPillComponent extends Component<LabelPillComponentI> {
  static propTypes: any

  render() {
    const {
      value,
      className = ['bg-primary'],
    } = this.props

    return value >= 0 &&
      <span className={"badge rounded-pill " + className.join(' ')}>
        {value}
      </span>
  }
}

LabelPillComponent.propTypes = {
  value: PropTypes.number,
  className: PropTypes.arrayOf(PropTypes.string),
}

export default LabelPillComponent
