import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ApiService } from '../../services/api';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import { PositionUpdateService } from '../../services/position-update-service';

@Component({
  selector: 'app-transaction-form',
  standalone: true, 
  imports: [
    FormsModule,         
    CommonModule,       
    MatCardModule,       
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    
  ],
  templateUrl: './transaction-form.html',
  styleUrls: ['./transaction-form.css']
})
export class TransactionFormComponent {
  
  transaction = {
    tradeId: null,
    version: null,
    securityCode: '',
    quantity: null,
    action: 'INSERT',
    buySell: 'Buy'
  };

  
  constructor(private apiService: ApiService,private updateService: PositionUpdateService) {}

  submitTransaction() {
    this.apiService.submitTransaction(this.transaction).subscribe({
      next: () => {       
         this.updateService.notifyRefreshNeeded(); 
        this.transaction = { tradeId: null, version: null, securityCode: '', quantity: null, action: 'INSERT', buySell: 'Buy' };
      },
      error: (err) => {
      
        console.error(err);
      }
    });
  }

  
}