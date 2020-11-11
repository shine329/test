import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import{AlertController} from '@ionic/angular'
import { ok } from 'assert';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string;
  address: string;
  email: string;
  username: string;
  password: string;

  constructor(private auth:AngularFireAuth,private alert:AlertController) { }

  ngOnInit() {
  }
  async reg(){
    const{email,password}=this
   // console.warn(this.name+"\n"+this.address+"\n"+this.email+"\n"+this.username+"\n"+this.password)
  try{
    
    const authi=await this.auth.createUserWithEmailAndPassword(email,password)
    console.log(authi);
    this.presentAlert("msg","success")
  }catch(err){
    console.dir(err);
    this.presentAlert("warning","not valid")
  }
  
  }
async presentAlert(header:string,message:string){
  const alert =await this.alert.create({
    header,
    message,
    buttons:["ok"]
  })
  await alert.present();
}

}
