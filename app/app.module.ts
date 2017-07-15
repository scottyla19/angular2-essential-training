import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
@NgModule({
  imports: [BrowserModule], //bring other angular components
  declarations: [AppComponent, MediaItemComponent], //make components, directives, and pipe not in angular
  bootstrap: [AppComponent] //entry point for app
})
export class AppModule {}
