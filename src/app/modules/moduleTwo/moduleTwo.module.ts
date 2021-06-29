import { NgModule } from '@angular/core';
import { ModuleTwoComponent } from './moduleTwo.component';
import { AppCoreModule } from 'src/app/_app-core/app-core.module';
import { ModuleTwoRoutingModule } from './moduleTwo-routing.module';

@NgModule({
  imports: [
    AppCoreModule,
    ModuleTwoRoutingModule
  ],
  declarations: [ModuleTwoComponent]
})
export class ModuleTwoModule { }
