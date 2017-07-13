import { Component, ViewChild } from '@angular/core'
import { Platform, Nav } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { HomePage } from '../pages/home/home'
import { GetItemsSideMenuInteractor } from '../domain/GetItemsSideMenuInteractor'
import SideMenuBo from '../domain/entities/sideMenuBo'

@Component({
  templateUrl: 'app.html',
  providers: [GetItemsSideMenuInteractor]
})
export class MyApp {
  rootPage:any = HomePage
  interactor:GetItemsSideMenuInteractor
  public sideMenuContent:Array<SideMenuBo>

  @ViewChild('content') content: Nav

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    interactor: GetItemsSideMenuInteractor
  ) {
    platform.ready().then(() => {

      statusBar.styleDefault()
      splashScreen.hide()

      this.sideMenuContent = interactor.invoke()
      console.log(this.sideMenuContent)
    });
  }
}
