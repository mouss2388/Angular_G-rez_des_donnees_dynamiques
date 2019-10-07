import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionDataDynamics';
  isAuth = false;


  onStart(){
    this.isAuth = true;
    console.log("Tout est allumé !");
  }

  onUnlockBtn(){
    this.isAuth = true;
  }
}
