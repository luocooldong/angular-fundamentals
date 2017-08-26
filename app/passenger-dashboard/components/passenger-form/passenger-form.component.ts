import { Component, Input } from '@angular/core';

import { Baggage } from '../../models/baggage.interface';
import { Passenger } from './../../models/passenger.interface';

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
                required
                #fullname="ngModel"
                [ngModel]="detail?.fullname">

                {{ fullname.errors | json }}
            <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
               Passenger name is required
            </div>
          </div>

          <div>
            Passenger ID:
            <input
                type="number"
                name="id"
                required
                #id="ngModel"
                [ngModel]="detail?.id">

                {{ id.errors | json }}

             <div *ngIf="id.errors?.required && id.dirty" class="error">
                Passenger ID is required
             </div>

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

          <div>
             Luggage:
             <select name="baggage"
               [ngModel]="detail?.baggage">
               <option
                   *ngFor="let item of baggage"
                   [value]="item.key"
                   [selected]="item.key === detail?.baggage"
                   >
                   {{ item.value }}
               </option>
             </select>

             <select name="baggage"
                  [ngModel]="detail?.baggage">
                <option
                    *ngFor="let item of baggage"
                    [ngValue]="item.key"
                    >
                    {{ item.value }}
                </option>
             </select>
          </div>

          <button type="submit" [disabled]="form.invalid">
              Update Passenger
          </button>


          <div>{{ form.value | json }}</div>
          <div>Valid: {{ form.valid | json }}</div>
          <div>Invalid: {{ form.invalid | json }}</div>
       </form>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },
    {
        key: 'hand-only',
        value: 'Hand baggage'
    },
    {
        key: 'hold-only',
        value: 'Hold baggage'
    },
    {
        key: 'hand-hold',
        value: 'Hand and Hold baggage'
    }

];

    toggleCheckIn(checkedIn: Boolean){
        this.detail.checkInDate = Date.now();
    }


}