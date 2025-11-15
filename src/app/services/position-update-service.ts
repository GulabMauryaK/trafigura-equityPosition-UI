import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PositionUpdateService {

  private refreshSubject = new Subject<void>();

  public refresh$ = this.refreshSubject.asObservable();


  notifyRefreshNeeded(): void {
    this.refreshSubject.next();
  }
}