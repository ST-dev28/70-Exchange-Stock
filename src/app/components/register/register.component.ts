import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/models/notification';
import { User } from 'src/app/models/user';
import { AccessService } from 'src/app/services/access/access.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public user: User;

  constructor(private accessService: AccessService,
    /*private messagesService: MessagesService,*/
    private router: Router) {

    this.user = {
      username: "",
      password: ""
    };
   }

  ngOnInit(): void {
  }

  public register(): void {
    this.accessService.registerUser(this.user)
    .subscribe({
      next: () => {
        //kai ateina teigiamas (20x) atsakymas is serverio
      /*this.messagesService.postMessage({
      message: "User registered",
      type: NotificationType.Success
      })*/

      this.router.navigate(["/login"]);
      },
      error: () => {
        /*this.messagesService.postMessage({
      message: "User already exists",
      type: NotificationType.Error
      })*/
      }
    });
  }
}
