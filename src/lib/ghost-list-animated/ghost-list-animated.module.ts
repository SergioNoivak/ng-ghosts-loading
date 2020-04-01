import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostListAnimatedComponent } from './ghost-list-animated.component';



@NgModule({
  declarations:[GhostListAnimatedComponent],
  exports:[GhostListAnimatedComponent],
  imports: [
    CommonModule
  ]
})
export class GhostListAnimatedModule { }
