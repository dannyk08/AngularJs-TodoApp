import angular from "angular";
import { react2angular } from "react2angular";

import Button from "./button";
import ButtonRadio from "./button-radio";
import Checkbox from "./checkbox";
import LabelPill from "./label-pill";

export default angular.module('todoApp.common.ui', [])
  .component('rButton', react2angular(Button))
  .component('rButtonRadio', react2angular(ButtonRadio))
  .component('rCheckbox', react2angular(Checkbox))
  .component('rLabelPill', react2angular(LabelPill))
