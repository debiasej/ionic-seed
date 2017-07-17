import { injectable } from 'inversify'
import { ReflectiveInjector } from '@angular/core'
import { Http, BrowserXhr, RequestOptions, ResponseOptions, ConnectionBackend,
  XSRFStrategy, BaseRequestOptions, BaseResponseOptions, XHRBackend, CookieXSRFStrategy  } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { SideMenuDatasource } from './sideMenuDatasource'
import SideMenuBo from '../../../../domain/entities/sideMenuBo'
import SideMenuDto from '../../../dto/sideMenu/sideMenuDto'
import Mapper from '../../../dto/sideMenu/mapper/sideMenuMapper'


@injectable()
class SideMenuDatasourceRest implements SideMenuDatasource {

  http: Http
  mapper: Mapper

  constructor() {
    this.mapper = new Mapper()

    let injector = ReflectiveInjector.resolveAndCreate([
        Http,
        BrowserXhr,
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ResponseOptions, useClass: BaseResponseOptions},
        {provide: ConnectionBackend, useClass: XHRBackend},
        {provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()},
    ]);

    this.http = injector.get(Http);
  }

  getSideMenuItems() : Promise<Array<SideMenuBo>> {

    var itemsBo: Array<SideMenuBo> 
    var promise: Promise<Array<SideMenuDto>> = this.http.get('https://demo5902092.mockable.io/v2.9/1916622435261787/leads')
      .map(res => {
        return res.json()
      })
      .toPromise()
      .catch(err => {
        console.error('Http error!')
    })
    
    return promise.then(itemsDto => itemsBo = this.mapToBo(itemsDto))
  }

  private mapToBo(itemsDto: Array<SideMenuDto>) : Array<SideMenuBo> {
    return this.mapper.sideMenuDtotoSideMenuBo(itemsDto)
  }
  
}

export default SideMenuDatasourceRest
