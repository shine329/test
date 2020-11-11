import { AngularFireAuthModule } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import{AlertController} from '@ionic/angular'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  password: string;

  constructor( private authi:AngularFireAuth,private alert:AlertController,private nav:Router) { }

  ngOnInit() {
  }
  async log(){
    const{user,password}=this
    try{
const sign=await this.authi.signInWithEmailAndPassword(user,password)

this.nav.navigateByUrl('/card');

    }
    catch(err){
console.dir(err)
this.presentAlert("warning","not valid")

    }
    console.warn(this.user+"\n"+this.password)
  }
  async presentAlert(header:string,message:string){
    const alert =await this.alert.create({
      header,
      message,
      buttons:["ok"]
    })
    await alert.present();

}}
