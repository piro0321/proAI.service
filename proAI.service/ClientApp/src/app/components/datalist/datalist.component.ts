import { Component, OnInit } from '@angular/core';
import { User } from "src/app/models/user";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
  
  public busy: Promise<any>;
  public getDataBusy: Promise<any>;

  public dataList: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public async getUser() {
    this.getDataBusy = this.userService.get();
    await this.getDataBusy.then(res => this.dataList = res.body).catch();
  }
}
