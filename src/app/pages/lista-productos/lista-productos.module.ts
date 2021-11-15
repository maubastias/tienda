import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProductosPageRoutingModule } from './lista-productos-routing.module';

import { ListaProductosPage } from './lista-productos.page';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProductosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListaProductosPage]
})
export class ListaProductosPageModule {}
