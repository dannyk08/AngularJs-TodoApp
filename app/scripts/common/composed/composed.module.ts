import angular from "angular";
import { react2angular } from "react2angular";

import ButtonRadioWPill from "./button-radio-wpill";

export default angular.module('todoApp.common.composed', [])
  .component('rButtonRadioWPill', react2angular(ButtonRadioWPill))
