import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostListComponent } from './ghost-list.component';



@NgModule({
  exports:[GhostListComponent],
  declarations: [GhostListComponent],
  imports: [
    CommonModule
  ]
})
export class GhostListModule { }
