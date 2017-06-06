import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  interval;
  now = new Date();

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(()=> {
      this.now = new Date() ;
    });
  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }

}
