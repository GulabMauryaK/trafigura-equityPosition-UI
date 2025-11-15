import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor (used in Mat Table directives)
import { ApiService } from '../../services/api';
import { PositionUpdateService } from '../../services/position-update-service';
import { Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-positions-table',
  // 1. Mark as standalone
  standalone: true, 
  // 2. Add required imports
  imports: [
    CommonModule, 
    MatTableModule, // Provides <mat-table> and directives
    MatCardModule   // Used for the container
  ],
  templateUrl: './positions-table.html',
  styleUrl: './positions-table.css',
})
export class PositionsTableComponent implements OnInit {
  // 3. Define the array of column IDs to be displayed and their order
  displayedColumns: string[] = ['securityCode', 'quantity']; 
  
  // The data source for the table
  positions: any[] = []; 
private refreshSubscription: Subscription | undefined; // To manage the subscription lifecycle
  constructor(private apiService: ApiService,private positionUpdateService: PositionUpdateService) {}

  ngOnInit() {
    this.loadPositions();
    this.refreshSubscription = this.positionUpdateService.refresh$.subscribe(() => {
      this.loadPositions(); 
    });
  }

  loadPositions() {
    // Note: The 'positions' array itself serves as the 'dataSource' for the table
    this.apiService.getPositions().subscribe((data) => {
      this.positions = data;
    });
  }
  ngOnDestroy(): void {
    this.refreshSubscription?.unsubscribe();
  }

  
}