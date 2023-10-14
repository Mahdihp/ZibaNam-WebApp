import {Component, Optional} from '@angular/core';
import {StatusBar} from "@capacitor/status-bar";
import {Platform} from "@ionic/angular";
import OneSignal from 'onesignal-cordova-plugin';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Inbox', url: '/folder/Inbox', icon: 'mail'},
    {title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane'},
    {title: 'اسم روح', url: '/folder/soul', icon: 'heart'},
    {title: 'Archived', url: '/folder/Archived', icon: 'archive'},
    {title: 'Trash', url: '/folder/Trash', icon: 'trash'},
    {title: 'Spam', url: '/folder/Spam', icon: 'warning'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  // @ts-ignore
  constructor(platform: Platform) {
    platform.ready().then(() => {
      OneSignalInit();
    });
  }

}

function OneSignalInit(): void {
  // Uncomment to set OneSignal device logging to VERBOSE
  // OneSignal.Debug.setLogLevel(6);

  // Uncomment to set OneSignal visual logging to VERBOSE
  // OneSignal.Debug.setAlertLevel(6);
  alert("Salam");
  // NOTE: Update the init value below with your OneSignal AppId.
  OneSignal.initialize("5eb61260-6f82-4efe-869b-29fafbb62301");


  let myClickListener = async function(event :any) {
    let notificationData = JSON.stringify(event);
  };
  OneSignal.Notifications.addEventListener("click", myClickListener);


  // Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
  OneSignal.Notifications.requestPermission(true).then((accepted: boolean) => {
    console.log("User accepted notifications: " + accepted);
  });
}
