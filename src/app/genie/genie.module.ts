import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeniePage } from './genie.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GeniePageRoutingModule } from './genie-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GeniePageRoutingModule
  ],
  declarations: [GeniePage]
})
export class GeniePageModule {}
