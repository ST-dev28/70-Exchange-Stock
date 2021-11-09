import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AccessService } from '../services/access.service';

// ng generate guard guards/pavadinimas
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
constructor(private router: Router, 
  /*private messagesService: MessagesService,*/
  private accessService: AccessService) {

}

// Guard turi canActivate metoda (butinas), kuris grazina true arba false
  canActivate(): boolean {

  if (this.accessService.isLoggedIn) {
    return true;
  }
    /*this.messagesService.postMessage({
      message: "You should to login fist!"
      type: NotificationType: Error
    });*/

    this.router.navigate(["login"]);
    return false;
  }
  
}
