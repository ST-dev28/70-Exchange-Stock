import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccessService, LoginResponse } from 'src/app/services/access/access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public user: User;

  constructor(private accessService: AccessService,
    /*private messagesService: MessagesService,*/
    private router: Router ) {

    this.user = {
      username: "",
      password: ""
    };
   }

  ngOnInit(): void {
  }

  public login(): void {
    this.accessService.login(this.user).subscribe({
      next: (response: LoginResponse) => {
        console.log(response);

        this.accessService.setToken(response.token);

        this.router.navigate(["/add"]);
      },

      error: () => {
        /*this.messagesService.postMessage({
        message: "Invalid details",
        type: NotificationType.Error
        })*/
      }
    });
  }
}
