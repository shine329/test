import { Component, OnInit } from '@angular/core';
import {IonSlides} from '@ionic/angular'
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Settings',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera-outline',
        
        handler: () => {
          console.log('camera');
        }
      }, {
        text: 'Location',
        icon: 'location-outline',
        handler: () => {
          console.log('location clicked');
        }
      }, {
        text: 'Mic',
        icon: 'mic-outline',
        handler: () => {
          console.log('mic clicked');
        }
      }, {
        text: 'Storage',
        icon: 'folder-outline',
        handler: () => {
          console.log('storage clicked');
        }
      },{
        text: 'SMS',
        icon: 'chatbubble-outline',
        handler: () => {
          console.log('sms clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  sliderload(sliderr:IonSlides){

    sliderr.startAutoplay();
  }slideOpts={loop:true,
  spaceBetween:0,
  centeredSlides:true,
  slidesPerView:1.4,
  }

  ngOnInit() {
  }

}
