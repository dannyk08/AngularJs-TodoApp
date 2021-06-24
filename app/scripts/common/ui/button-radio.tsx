import React, {
  Component,
  Fragment,
  MouseEventHandler,
} from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

export interface ButtonRadioComponentI {
  id: string,
  value: string,
  name: string,
  className: string[],
  disabled: boolean,
  onClick: MouseEventHandler,
}

class ButtonRadio extends Component<ButtonRadioComponentI> {
  static propTypes: any

  render() {
    const {
      children,
      value,
      name = uuid(),
      id = uuid(),
      className = ['bg-primary'],
      onClick,
    } = this.props

    const identifier = [name, id].join('_')
    const labelClassName = ["btn"].concat(className).filter(s => typeof s == 'string').join(' ')

    return children && onClick && (
      <Fragment>
        <input
          type="radio"
          className="btn-check"
          autoComplete="off"
          value={value}
          name={name}
          id={identifier}
          onClick={onClick} />
        <label
          htmlFor={identifier}
          className={labelClassName}>
          {children}
        </label>
      </Fragment>
    )
  }
}

export const ButtonRadioPropTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

ButtonRadio.propTypes = { ...ButtonRadioPropTypes }

export default ButtonRadio
