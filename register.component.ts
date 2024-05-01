import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
      FormsModule,
      ReactiveFormsModule
    ],

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
submitForm(_t4: any) {
throw new Error('Method not implemented.');
}
form: any;
registerUser(arg0: any) {
throw new Error('Method not implemented.');
}

}
