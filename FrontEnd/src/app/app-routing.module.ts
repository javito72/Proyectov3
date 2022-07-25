import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component'

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  { path:'nuevaexp', component: NewExperienciaComponent},
  { path:'editexp/:id', component: EditExperienciaComponent},
  { path:'nuevaedu', component: NewEducacionComponent},
  { path:'editedu/:id', component: EditEducacionComponent},
  { path:'nuevoproyect', component: NewProyectoComponent},
  { path:'editproyect/:id', component: EditProyectoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]    
})
export class AppRoutingModule { }
