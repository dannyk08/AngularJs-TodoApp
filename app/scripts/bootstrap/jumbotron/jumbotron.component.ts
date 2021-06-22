
import { IComponentOptions, IController } from "angular";

import template from './jumbotron.component.html'

export class JumbotronController implements IController { }

export const JumbotronComponent: IComponentOptions = {
  controller: JumbotronController,
  template,
}
