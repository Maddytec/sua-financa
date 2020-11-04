import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumpComponent } from './components/bread-crump/bread-crump.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [
    BreadCrumpComponent,
    PageHeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    BreadCrumpComponent,
    PageHeaderComponent,
    RouterModule
  ]
})
export class SharedModule { }
