import { Routes } from '@angular/router';
import { AuthGuard } from 'app/pages/auth/auth.guard';
import { LoginComponent } from 'app/pages/login/login.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,  canLoad: [AuthGuard] },
    { path: 'user',           component: UserComponent,  canLoad: [AuthGuard] }
];
