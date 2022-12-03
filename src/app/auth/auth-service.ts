import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private authorized = new BehaviorSubject<boolean>(false);

  get isAuthorized() {
    return this.authorized.asObservable();
  }

  constructor() {}

  authorize(){
    this.authorized.next(true);
  }
}
