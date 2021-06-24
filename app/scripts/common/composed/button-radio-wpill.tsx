import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import ButtonRadio, {
  ButtonRadioComponentI,
  ButtonRadioPropTypes,
} from '../ui/button-radio'
import LabelPill, {
  LabelPillComponentI,
  LabelPillPropTypes,
} from '../ui/label-pill'

export interface ButtonRadioWPillComponentI {
  radioProps: ButtonRadioComponentI,
  labelPillProps: LabelPillComponentI,
  label: string,
}

class ButtonRadioWPill extends Component<ButtonRadioWPillComponentI> {
  static propTypes: any

  render() {
    const {
      label,
      labelPillProps,
      radioProps,
    } = this.props

    return (
      <ButtonRadio {...radioProps}>
        <span>{label}</span>
        <LabelPill {...labelPillProps} />
      </ButtonRadio>
    )
  }
}

ButtonRadioWPill.propTypes = {
  radioProps: PropTypes.shape(ButtonRadioPropTypes),
  labelPillProps: PropTypes.shape(LabelPillPropTypes),
  label: PropTypes.string,
}

export default ButtonRadioWPill
