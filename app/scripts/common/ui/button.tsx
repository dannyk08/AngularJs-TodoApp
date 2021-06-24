import React, { Component, MouseEventHandler } from 'react'
import PropTypes from 'prop-types'

interface ButtonComponentI {
  className: string[],
  onClick: MouseEventHandler,
}

class Button extends Component<ButtonComponentI> {
  static propTypes: any

  render() {
    const {
      children,
      className = ['bg-primary'],
      onClick,
    } = this.props

    return children &&
      <button
        type="button"
        className={"btn " + className.join(' ')}
        onClick={onClick}>
        {children}
      </button>
  }
}

Button.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
}

export default Button
