import React, { Component } from 'react'
import PropTypes from 'prop-types'

export interface LabelPillComponentI {
  value: number,
  className: string[],
}

class LabelPill extends Component<LabelPillComponentI> {
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

export const LabelPillPropTypes = {
  value: PropTypes.number,
  className: PropTypes.arrayOf(PropTypes.string),
}

LabelPill.propTypes = { ...LabelPillPropTypes }

export default LabelPill
