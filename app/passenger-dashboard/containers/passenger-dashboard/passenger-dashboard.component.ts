import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';



@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers" >
      </passenger-count>
      <div *ngFor="let passenger of passengers;" >
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (view)="handleView($event)"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)" >
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
  ){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.passengerService
    .getPassengers()
    .subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleView(event: Passenger){
    this.router.navigate(['/passengers', event.id]);
  }

  handleEdit(event: Passenger){
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if(passenger.id === event.id){
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
    
  }

  handleRemove(event: Passenger){
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
   
  }

}