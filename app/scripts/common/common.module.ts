import angular from "angular";
import { react2angular } from "react2angular";

import CheckboxComponent from "./ui/checkbox";
import LabelPillComponent from "./ui/label-pill";

export default angular.module('todoApp.common', [])
  .component('checkbox', react2angular(CheckboxComponent))
  .component('labelPill', react2angular(LabelPillComponent))
