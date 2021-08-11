import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  passType: string = 'password';
  ngOnInit(): void {
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
    
  }

  keyPressPassCheck(event:any){
    //const passwordPattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9-_ ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  changePasswordType(){
    if(this.passType== 'password'){
    this.passType= 'text'
    }else{
    this.passType== 'password'
    }
    }

   
}
