import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';


import { SharedRecipeItemComponent } from "./shared-recipe-item.component";

@NgModule({
  imports:[
   CommonModule,  
  ],
  declarations: [
    SharedRecipeItemComponent
  ],
  exports:[SharedRecipeItemComponent]
})
export class SharedModule {}