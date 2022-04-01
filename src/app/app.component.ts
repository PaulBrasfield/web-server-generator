import { Component, Input } from '@angular/core';
import { ServerComponent } from './components/server/server.component';
import { ServerObject } from './components/server/serverObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverList: Array<ServerObject> = [];

  name: string;
  location: string;
  ipAddress: string;
  id: number;

  @Input()
  generateNewServer() {

    let newServer = new ServerObject();
    newServer.name = this.name;
    newServer.location = this.location;
    newServer.ipAddress = this.ipAddress;
    newServer.id = 0;

    this.serverList.push(newServer);

    newServer.id = this.serverList.findIndex(x => x.name === this.name);

    console.log(newServer.id);
  }
}
