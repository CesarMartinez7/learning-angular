import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DashboardComponent } from './features/dashbord/dashboard.component';
import NotFound from './features/notfound/notfound.component';
import { FetchingComponent } from './features/fetching/fetching.component';
import { FormularioComponent } from './features/formulario/formulario.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'books',component:  FetchingComponent},
  { path: 'form', component: FormularioComponent },
  { path: '**', component: NotFound }
];
