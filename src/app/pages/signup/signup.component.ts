import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email:any=''
  password:any=''
  username:any=''
constructor(private fs:FireService){

}
signup(){ 
  
this.validation()
let userDetails={
  username:this.username,
  email:this.email,
  password:this.password,


}

  this.fs.registration(userDetails)
  this.email=''
  this.password=''
  this.username=''


}
validation(){
  if(this.username==='')
    {
      alert('Please enter username')
    }
  else if(this.email==='')
    {
      alert('Please enter email')
    }
    else if(this.password==='')
    {
      alert('Please enter password')
    }
  
}
}
