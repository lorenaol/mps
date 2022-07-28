import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Room} from "../../entities/room";
import {RoomService} from "../../services/room.service";

@Component({
  selector: 'app-room-settings',
  templateUrl: './room-settings.component.html',
  styleUrls: ['./room-settings.component.css']
})
export class RoomSettingsComponent implements OnInit {

  constructor(private router:Router, private service: RoomService) { }

  room? : Room;
  static bool : boolean = false;
  ngOnInit(): void {
    this.service.getRoomByName(this.router.url.split('/')[2]).subscribe((data:any)=> {
      this.room = data.body;
    })
    // this.room = JSON.parse(localStorage.getItem("room")!);
  }
  exit() : void {
    this.router.navigate(['/room', this.room!.name]);
  }
  more(): void {
    RoomSettingsComponent.bool = !RoomSettingsComponent.bool;

  }

}
