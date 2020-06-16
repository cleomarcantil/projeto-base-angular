import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TestesRoutingModule } from './testes-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,    
    TestesRoutingModule
  ]
})
export class TestesModule { }
