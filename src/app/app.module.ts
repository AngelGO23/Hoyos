import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { FormComponent } from './form/form.component';
import { FormListComponent } from './form-list/form-list.component';
import { routes } from './routes';
import { ProductsService } from './products.service';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
