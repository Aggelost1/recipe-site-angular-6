import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from '../shopping-list/shopping-list-add.component';

@NgModule({
  imports:[
   CommonModule,
   FormsModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent,
  ]
})
export class ShoppingListModule {}