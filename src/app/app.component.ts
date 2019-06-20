import { Component, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatExpansionPanel } from "@angular/material";
import { UserServiceService } from "./user.service";

export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public selected: string;

  public forcedState = false;
  public usersData: {};
  public repoData: {};
  indexExpanded: number = -1;
  p: number = 1;
  collection: any[];
  constructor(private user: UserServiceService) {}
  ngOnInit(): void {
    this.selected = "nameA2Z";
  }

  /* Load user data through API*/

  loadUsers(str) {
    if (str.length >= 3) {
      setTimeout(() => {
        return this.user.getUser(str).subscribe((data: {}) => {
          this.usersData = data;
          console.log(data);
        });
      }, 1000);
    }
  }

  /* Toggle repository panel with button clicks */
  public togglePanel(index: number, id) {
    this.indexExpanded = index == this.indexExpanded ? -1 : index;
    this.getRepo(id);
  }

  /* Get repository data through API */

  getRepo(id) {
    return this.user.getRepos(id).subscribe((data: {}) => {
      this.repoData = data;
      console.log(data);
    });
  }
}
