import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/services/access/access.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public accessService: AccessService) { }

  ngOnInit(): void {
  }
}
