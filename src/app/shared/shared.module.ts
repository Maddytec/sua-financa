import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumpComponent } from './components/bread-crump/bread-crump.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadCrumpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    BreadCrumpComponent,
    RouterModule
  ]
})
export class SharedModule { }
