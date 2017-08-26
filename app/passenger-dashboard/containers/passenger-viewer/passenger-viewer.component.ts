import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

//  service
import { PassengerDashboardService } from '../../passenger-dashboard.service';

// models
import { Passenger } from '../../models/passenger.interface';


import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
      <div>
         <button (click)="goBack()" >
           &lsaquo; Go back
         </button>
         <passenger-form
           [detail]="passenger"
           (update)="onUpdatePassenger($event)" >
         </passenger-form>
      </div>
    `
})
export class PassengerViewerComponnet implements OnInit{
    passenger: Passenger;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService
    ){ }
    
    ngOnInit(){
        // this.route.params
        //   .subscribe((data: Params) => {
        //       console.log(data);
        //   });
        // 这一段真的很精彩
        this.route.params
          .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
          .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event: Passenger){
        console.log(event);
        this.passengerService
          .updatePassenger(event)
          .subscribe((data: Passenger) => {
              this.passenger = Object.assign({}, this.passenger, event);
          });
    }

    goBack(){
        this.router.navigate(['/passengers']);
    }

}