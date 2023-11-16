// import { Component } from '@angular/core';

import { Component } from "@angular/core";

// @Component({
//   selector: 'app-servers',
//   // template: `<app-server></app-server><app-server></app-server>`,
//   templateUrl: './servers.component.html',
//   styleUrls: ['./servers.component.css']
// })
// export class ServersComponent {
//   allowNewServer = false;
//   serverCreationStatus = "No server was created"
//   serverName = 'test server'
//   // username = ''
//   // serverame = "TEst server"
//   allowNewUsername = false
//   serverCreated = false
//   servers = ['TestServer', 'TestServer 2']
//   constructor(){
//     setTimeout(() => {
//       this.allowNewServer = true
//     }, 2000)
//   }

//   onCreateServer(){
//     this.serverCreated = true
//     this.servers.push(this.serverName)
//     this.serverCreationStatus = "server was created with the name " + this.serverName
//   }
//   // onUpdateServerName(event: any){
//   //   this.servername = (<HTMLInputElement>event.target).value
//   // }
//   // onUpdateUserName(event: any){
//   //   if(event.target.value.split(' ') !== '') this.allowNewServer = true
//   //   else this.allowNewServer = false
//   //   // this.userName = (<HTMLInputElement>event.target).value
//   // }
//   // onEnterUserName(event: any){
//   //   event.target.value = ''
//   // }
// }


@Component({
  selector: 'app-server',
  template: './servers.component.html'
})

export class ServersComponent{
  
}