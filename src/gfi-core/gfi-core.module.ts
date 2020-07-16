import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PIPES_CADENAS} from './pipes/cadenas.pipe';
import { SizerComponent } from './components/sizer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PIPES_CADENAS, SizerComponent, ],
  exports: [
    PIPES_CADENAS, SizerComponent,
  ],
})
export class GfiCoreModule { }
