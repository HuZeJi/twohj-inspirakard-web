import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { CardTestingComponent } from './card-testing/card-testing.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [CardTestingComponent],
  imports: [CommonModule, TestModuleRoutingModule, MaterialModule],
})
export class TestModuleModule {}
