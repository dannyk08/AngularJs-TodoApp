import angular from "angular";

import commonComposedModule from "./composed/composed.module";
import commonUiModule from "./ui/ui.module";

export default angular.module('todoApp.common', [
  commonComposedModule.name,
  commonUiModule.name,
])
