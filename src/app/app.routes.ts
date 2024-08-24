import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosComponent } from './autos/autos.component';
import { GestionComponent } from './gestion/gestion.component';
import { ApiComponent } from './api/api.component';
import { EditarAutoComponent } from './editar-auto/editar-auto.component';



export const routes: Routes = [
    {path:"autos",component:AutosComponent},
    {path:"gestion", component: GestionComponent},
    {path:"api",component:ApiComponent},
    {path: "editar-auto/:id",component:EditarAutoComponent},
    {path:"",redirectTo:"/autos",pathMatch:"full"}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}