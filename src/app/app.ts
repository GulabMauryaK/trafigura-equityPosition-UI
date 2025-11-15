import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TransactionFormComponent } from '../app/components/transaction-form/transaction-form';
import { PositionsTableComponent } from '../app/components/positions-table/positions-table';
@Component({
  selector: 'app-root',
  standalone: true, 
  
 
  imports: [
    CommonModule, 
    
    TransactionFormComponent, 
    PositionsTableComponent  
    ],
  
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
 protected readonly title = signal('trafigura-equityPosition');
}




