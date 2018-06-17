import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  
})
export class ShoppingListComponent  {
 items: Ingredient[]=[];
 selectedItem: Ingredient = null; 


 constructor (private sls : ShoppingListService){}

 ngOnInit() {
  this.items = this.sls.getItems();
 }

 onSelectItem(item: Ingredient){
  this.selectedItem = item;
 }

 onCleared(){
 this.selectedItem = null;
 
 }
}
