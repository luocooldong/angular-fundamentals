import { type } from 'os';
import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
       <form #form="ngForm" novalidate>
           {{ detail | json }}
          <div> 
            Passenger name:
            <input
                type="text"
                name="fullname"
                [ngModel]="detail?.fullname">
             
          </div>

          <div>
            Passenger ID:
            <input
                type="number"
                name="id"
                [ngModel]="detail?.id">
          </div>

          <div>
            <label>
                <input type="radio"
                      [value]="true"
                      name="checkedIn"
                      [ngModel]="detail?.checkedIn"
                      (ngModelChange)="toggleCheckIn($event)" >
               Yes
            </label>
            <label>
                <input type="radio"
                    [value]="false"
                    name="checkedIn"
                    [ngModel]="detail?.checkedIn"
                    (ngModelChange)="toggleCheckIn($event)" >
                No
            </label>
          </div>

          <div>
                <label>
                    <input type="checkbox"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)" >
                </label>
          
          </div>

          <div *ngIf="form.value.checkedIn">
            Check in date:
            <input 
                type="number"
                name="checkInDate"
                [ngModel]="detail?.checkInDate">
          </div>


          {{ form.value | json }}
       </form>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    toggleCheckIn(checkedIn: Boolean){
        this.detail.checkInDate = Date.now();
    }


}