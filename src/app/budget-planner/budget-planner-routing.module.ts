import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SideNavNavComponent } from './side-nav-nav/side-nav-nav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IncomeComponent } from '../income/income.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'side-nav',component:SideNavNavComponent },
    {path:'dashboard',component:DashboardComponent},
    {path:'income',component:IncomeComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BudgetPlannerRoutingModule {}