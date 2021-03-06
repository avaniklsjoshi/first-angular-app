import {Component, Input} from '@angular/core';
import {User} from '../shared/model/User';

@Component({
  selector: 'user-profile',
  template:`
   <div class="jumbotron" *ngIf="user">
        <h2>{{user.name}}<small>{{user.username}}</small></h2>

        <input class="form-control" [(ngModel)]="user.name">
      </div>
  `
})
export class UserProfileComponent{
  @Input() user:User;
}