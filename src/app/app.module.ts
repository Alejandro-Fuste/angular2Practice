import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { StarWarsService } from "./star-wars.service";

@NgModule({
  declarations: [AppComponent, TabsComponent, ListComponent, ItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [StarWarsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
