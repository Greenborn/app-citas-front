import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDescriptionPage } from './user-description.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{
      path: '',
      component: UserDescriptionPage
    }])
  ],
  declarations: [UserDescriptionPage]
})
export class UserDescriptionPageModule {}
