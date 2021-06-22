
import { IComponentOptions, IController } from "angular";

import template from './bootstrap.component.html'

export class BootstrapController implements IController { }

export const BootstrapComponent: IComponentOptions = {
  controller: BootstrapController,
  template,
}
