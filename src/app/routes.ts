import { Routes } from "@angular/router";
import { FormListComponent } from "./form-list/form-list.component";
import { FormComponent } from "./form/form.component";
import { HomePageComponent } from "./home-page/home-page.component";
export const routes:Routes = [
    {path: '', component: HomePageComponent},
    {path: 'form', component: FormComponent},
    {path: 'list', component: FormListComponent},
    
]