import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TpcButton } from './button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TpcButton],
  exports: [TpcButton]
})
export class TpcButtonModule { }
