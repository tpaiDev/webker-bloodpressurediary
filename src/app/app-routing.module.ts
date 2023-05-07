import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

// lazy-loading
const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'bpmeasurement',
    loadChildren: () => import('./pages/bpmeasurement-add-edit/bpmeasurement-add-edit.module').then(m => m.BpmeasurementAddEditModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
      path: 'not-found',
      loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  {
    path: '**',
    redirectTo: '/not-found',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
