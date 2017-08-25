import { NgModel } from '@angular/forms/src/directives';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls:['app.component.scss'],
  template: `
      <div class="app">
        <h1  [innerHtml]='title' ></h1>
        <h1> {{ title + '!'}} </h1>
        <img [src]="logo">
        <button (click)="handleClick()" >Chang Name</button>
        <input type="text" 
              [ngModel]="name"
              // [value]="name"
              (input)="handleInput($event)" 
              (blur)="handleBlur($event)" >
        <div> {{name}}  </div>
        <div>
          {{ numberOne  + numberTwo }}
        </div>
        <div>
           {{ isHappy ? ':)' : '(:' }}
        </div>
        
      </div>
  `
})
export class AppComponent {
  title: string;
  name: string = 'Yudong Geng';
  logo: string = 'img/logo.svg';
  isHappy: boolean = true;
  numberOne: number = 1;
  numberTwo: number = 2;

  constructor(){
    this.title = 'Ultimate Angular fun';
  }

  handleClick(){
    this.name="Mook";
  }

  handleInput(event: any){
    this.name = event.target.value;
  }

  handleBlur(event: any){
    this.name = event.target.value;
    //  console.log(event);
  }

}
