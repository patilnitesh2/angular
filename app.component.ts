import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Furniture','Hardware','Mobile'];
  topicHasError=true;
  UserModel=new User()
}
onsubmit(){
  console.log(this.UserModel);
}