import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'passenger-count',
    template: `
       <div>
        <h3>Airline Passengers</h3>
        <div>
           Total checked in: {{ checkedInCount() }}/{{ items?.length }}
        </div>
       </div>
    `
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    constructor() {

    }

    checkedInCount(){
        if(!this.items) return;
        return this.items.filter((passenger: Passenger ) => passenger.checkedIn).length;
    }
}