import { NgModule } from '@angular/core';
import { NgGhostsLoadingComponent } from './ng-ghosts-loading.component';
import { GhostContainerComponent } from './ghost-container/ghost-container.component';

import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgGhostsLoadingComponent,GhostContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgGhostsLoadingComponent]
})
export class NgGhostsLoadingModule { }
