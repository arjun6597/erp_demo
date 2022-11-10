import { Component, OnInit } from '@angular/core';
import { usersList } from '@global/constants';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  userDetail = []
  constructor() { 
    this.userDetail = usersList
  }

  ngOnInit(): void {
  }

}
