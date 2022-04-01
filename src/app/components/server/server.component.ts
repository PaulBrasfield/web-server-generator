import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerObject } from './serverObject';
import { AppComponent } from 'src/app/app.component';
import { CdTimerComponent, CdTimerModule } from 'angular-cd-timer';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  name: string;
  location: string;
  ipAddress: string;
  id: number;
  status: string;
  edit: boolean;

  @ViewChild( 'basicTimer', { static: false} ) cdTimer: CdTimerComponent;

  constructor(
    private appComponent: AppComponent,
  ) { }

  ngOnInit(): void {
    this.name = this.appComponent.name;
    this.location = this.appComponent.location;
    this.ipAddress = this.appComponent.ipAddress;
    this.id = this.appComponent.id;
    this.status = "Active";
    this.edit = false;
    //this.upTime = true;
  }

  stopServer() {
    console.log("Stopping server...")
    this.cdTimer.stop();
    this.status = "Stopped";
  }

  startServer() {
    if(this.status == "Active") {
      console.log("Server is already running...")
      //return;
    } else {
      this.cdTimer.resume();
      this.status = "Active";
    }
  }

  resetServer() { 
      console.log("Resetting server...")
      this.status = "Resetting";
      this.cdTimer.stop();

      setTimeout(() => {
        this.cdTimer.start();
        this.status = "Active";
      }, 5000);

  }

  editServer() {
    if (this.status == "Resetting") {
      console.log("Cannot edit server while restarting.")
      return;
    } else {
      this.edit = true;
      this.cdTimer.stop();
      this.status = "Paused";
    }
  }

  submitEdit() {
    this.edit = false;
    this.cdTimer.resume();
    this.status = "Active";
    
  }

}
