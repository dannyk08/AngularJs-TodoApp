import angular from "angular";

import { CheckboxDirective } from "./directives/checkbox";
import { EditableLabelDirective } from "./directives/editable-label";

export default angular.module('todoApp.common', [])
  .directive('checkbox', CheckboxDirective)
  .directive('editableLabel', EditableLabelDirective)
