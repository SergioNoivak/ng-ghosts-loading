import { NgModule } from '@angular/core';
import { NgGhostsLoadingComponent } from './ng-ghosts-loading.component';
import { GhostContainerComponent } from './ghost-container/ghost-container.component';

import { CommonModule } from '@angular/common';
import { GhostListModule } from './ghost-list/ghost-list.module';
import { GhostListAnimatedModule } from './ghost-list-animated/ghost-list-animated.module';



@NgModule({
  declarations: [NgGhostsLoadingComponent,GhostContainerComponent],
  imports: [
    CommonModule,
    GhostListModule,
    GhostListAnimatedModule
  ],
  exports: [NgGhostsLoadingComponent,
]
})
export class NgGhostsLoadingModule { }
