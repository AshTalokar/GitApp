import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { MatExpansionModule } from "@angular/material/expansion";
import { UserServiceService } from "./user.service";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule
} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#ccc",
  bgsOpacity: 0.2,
  bgsPosition: "bottom-right",
  bgsSize: 40,
  bgsType: "rectangle-bounce",
  blur: 1,
  fgsColor: "#ccc",
  fgsPosition: "center-center",
  fgsSize: 40,
  fgsType: "rectangle-bounce",
  gap: 24,
  logoPosition: "center-center",
  logoSize: 120,
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "#240fbc",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: false,
  textPosition: "center-center",
  threshold: 500
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxPaginationModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
