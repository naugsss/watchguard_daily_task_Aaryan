import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppModel } from './app.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  public employeeData: AppModel = new AppModel();
  newSubject = new Subject<AppModel>();
}
