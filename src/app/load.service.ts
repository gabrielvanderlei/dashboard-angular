import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadService {

  private stateSource = new BehaviorSubject('none');
  currentState = this.stateSource.asObservable();

  constructor() { }
  
  loading() {
    this.stateSource.next("query")
  }

  
  updated() {
    this.stateSource.next("none")
  }

}