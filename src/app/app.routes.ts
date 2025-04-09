import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DashboardComponent } from './features/dashbord/dashboard.component';
import ButtonPress from './components/buttonPressed/button.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'btn', component: ButtonPress },
];
