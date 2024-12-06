import { Component, computed, EventEmitter, Input, input, output, Output, signal } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// type User = {
//   id: string,
//   avatar:string,
//   name: string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  // select  = output<string>();
  @Input({ required: true }) user!: User;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter();
  // avatar = input.required<string>();
  // name = input.required<string>();

  imagePath = computed(() => {
    return 'users/' + this.user.avatar;
  });

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
  // selectedUser =  signal(DUMMY_USERS[randomIndex])
  // selectedUser = DUMMY_USERS[randomIndex]

  // imagePath = computed(() => 'users/' + this.selectedUser().avatar)
  // get imagePath() {
  //   return 'users/' + this.avatar
  // }

  // onSelectedUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  // }
}
