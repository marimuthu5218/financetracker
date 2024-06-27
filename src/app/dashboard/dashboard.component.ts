import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavNavComponent } from "../budget-planner/side-nav-nav";
import { CommonModule } from "@angular/common";
import { Router } from 'express';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

//income
  lastMonthIncome = ['January: $1000', 'February: $1500', 'March: $1200'];
  currentMonthIncome = '$2000';

  //Expense
  lastMonthExpense = ['January: $800', 'February: $1000', 'March: $1200'];
  currentMonthExpese = '$1500';

  constructor(public router:Router){}
  onIncome() {
    this.router.navigate(['/financetracker/income']);
  }
}
