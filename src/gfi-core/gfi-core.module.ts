import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PIPES_CADENAS} from './pipes/cadenas.pipe';
import { PIPES_NUMERICOS} from './pipes/numericos.pipe';
import { SizerComponent } from './components/sizer.component';
import { MIS_VALIDADORES } from './directives/validaciones.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PIPES_CADENAS, SizerComponent, MIS_VALIDADORES, PIPES_NUMERICOS, ],
  exports: [
    PIPES_CADENAS, SizerComponent, MIS_VALIDADORES, PIPES_NUMERICOS,
  ],
})
export class GfiCoreModule { }
